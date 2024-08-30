import { PUBLIC_STOREFRONT_API_TOKEN, GRAPHQL_ENDPOINT } from '../constants/index.js';

const getFeaturedProductsQuery = (featuredProducts) => {
  const idsQueryPart = featuredProducts.map((id) => `"${id}"`).join(',');
  const featuredProductsQuery = `
    {
      nodes(ids: [${idsQueryPart}]) {
        ... on Product {
          id
          title
          featuredImage {
            url
            altText
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 10) {
            nodes {
              id
            }
          }
        }
      }
    }
  `;
  return featuredProductsQuery;
};

const getCreateCartMutationQuery = (lines) => {
  const createCartQuery = `
    mutation {
      cartCreate(
        input: {
          lines: [
            {
              quantity: 1,
              merchandiseId: "${lines}"
            }
          ]
        }
      ) {
        cart {
          id
          createdAt
          updatedAt
          checkoutUrl
          lines(first: 10) {
            edges {
              node {
                id
                merchandise {
                  ... on ProductVariant {
                    id
                    product {
                      title
                    }
                    price {
                      amount
                      currencyCode
                    }
                    image {
                      url
                      altText
                    }
                  }
                }
              }
            }
          }
          attributes {
            key
            value
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            subtotalAmount {
              amount
              currencyCode
            }
            totalTaxAmount {
              amount
              currencyCode
            }
          }
        }
      }
    }
  `;
  return createCartQuery;
};

const getUpdateCartMutationQuery = (lines) => {
  const cartInfo = JSON.parse(localStorage.getItem('eds-shopify-cart') ?? '{}');
  if (Object.keys(cartInfo).length) {
    const cartId = cartInfo.id;
    if (cartId) {
      const updateCartQuery = `
        mutation {
          cartLinesAdd(cartId: "${cartId}", lines: [{ quantity: 1, merchandiseId: "${lines}" }]) {
            cart {
              id
              createdAt
              updatedAt
              checkoutUrl
              lines(first: 10) {
                edges {
                  node {
                    id
                    merchandise {
                      ... on ProductVariant {
                        id
                        product {
                          title
                        }
                        price {
                          amount
                          currencyCode
                        }
                        image {
                          url
                          altText
                        }
                      }
                    }
                  }
                }
              }
              attributes {
                key
                value
              }
              cost {
                totalAmount {
                  amount
                  currencyCode
                }
                subtotalAmount {
                  amount
                  currencyCode
                }
                totalTaxAmount {
                  amount
                  currencyCode
                }
              }
            }
            userErrors {
              field
              message
            }
          }
        }
      `;
      return updateCartQuery;
    }
  }
  return null;
};

export default async function performGraphqlRequest(type, data) {
  if (!data) return;

  let query = '';
  if (type === 'featuredProducts') {
    query = getFeaturedProductsQuery(data);
  } else if (type === 'createCart') {
    query = getCreateCartMutationQuery(data);
  } else if (type === 'updateCart') {
    query = getUpdateCartMutationQuery(data);
  }

  const headers = {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': PUBLIC_STOREFRONT_API_TOKEN,
  };

  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: query?.replace(/(?:\r\n|\r|\n|\t|[\s]{4})/g, ' ').replace(/\s\s+/g, ' '),
    }),
  });

  if (!response.ok) {
    return null;
  }

  const result = await response.json();
  if (type === 'featuredProducts') {
    return result.data.nodes;
  }
  if (type === 'createCart') {
    return result.data.cartCreate.cart;
  }
  if (type === 'updateCart') {
    return result.data.cartLinesAdd.cart;
  }
}
