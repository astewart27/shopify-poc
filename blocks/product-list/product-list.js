import {
  h, Component, Fragment, render,
  // eslint-disable-next-line import/no-unresolved,import/extensions
} from '../../scripts/preact.js';
// eslint-disable-next-line import/no-unresolved,import/extensions
import htm from '../../scripts/htm.js';
import { PUBLIC_STOREFRONT_API_TOKEN, GRAPHQL_ENDPOINT } from '../../constants/index.js';

const html = htm.bind(h);

const performGraphqlRequest = async (featuredProducts) => {
  // Construct the 'ids' part of the GraphQL query
  const idsQueryPart = featuredProducts.map((id) => `"${id}"`).join(',');

  const query = `
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
        }
      }
    }
  `;

  const headers = {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': PUBLIC_STOREFRONT_API_TOKEN,
  };

  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: query.replace(/(?:\r\n|\r|\n|\t|[\s]{4})/g, ' ').replace(/\s\s+/g, ' '),
    }),
  });

  if (!response.ok) {
    return null;
  }

  const result = await response.json();
  const products = result.data?.nodes;

  return products;
};

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      ids: props.productIds || [],
    };
  }

  async componentDidMount() {
    const featuredProducts = this.state.ids;

    const products = await performGraphqlRequest(featuredProducts);
    this.setState({
      products,
    });
  }

  // async componentDidUpdate() {
  //   console.log('Component updated...', this);
  // }

  render() {
    return html`
      <${Fragment}>
        <div class="product-grid featured">
          ${this.state.products.length > 0 && this.state.products.map((product) => html`
            <div class="product-item" key=${product.id}>
              ${product.featuredImage && html`<img class="product-image" src=${product.featuredImage.url} alt=${product.featuredImage.altText} />`}
              <h4 class="product-title">${product.title}</h4>
              <p class="product-price">Price: ${product.priceRange.minVariantPrice.currencyCode} ${product.priceRange.minVariantPrice.amount}</p>
              <button type="button" class="product-button">Add to cart</button>
            </div>
          `)}
        </div>
      <//>
    `;
  }
}

export default function decorate(block) {
  const productIdsText = block.querySelector('p')?.innerText;
  const productIds = productIdsText.split(',');
  const productDetails = html`<${ProductDetails} productIds=${productIds}/>`;
  render(productDetails, block);
}
