import {
  h, Component, Fragment, render,
  // eslint-disable-next-line import/no-unresolved,import/extensions
} from '../../scripts/preact.js';
// eslint-disable-next-line import/no-unresolved,import/extensions
import htm from '../../scripts/htm.js';
import { performGraphqlRequest } from '../../scripts/utils.js';

const html = htm.bind(h);

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      ids: props.productIds || [],
      variants: []
    };
  }

  async componentDidMount() {
    const featuredProducts = this.state.ids;
    const products = await performGraphqlRequest('featuredProducts', featuredProducts);
    this.setState({
      products,
    });
  }

  async handleAddToCart(variant) {
    this.setState(prev => ({
      variants: [...prev.variants, variant.id]
    }), async () => {
      const variantsState = structuredClone(this.state.variants);
      const variantId = variantsState.pop();
      const cartInfo = JSON.parse(localStorage.getItem('eds-shopify-cart') ?? '{}');
      const cartActionType = (Object.keys(cartInfo).length === 0 ? 'createCart' : 'updateCart');
      const result = await performGraphqlRequest(cartActionType, variantId);
      if (result) {
        localStorage.setItem('eds-shopify-cart', JSON.stringify(result));
        window.dispatchEvent(new StorageEvent("localStorage"));
      }
    });
  }

  render() {
    return html`
      <${Fragment}>
        <div class="product-grid featured">
          ${this.state.products.length > 0 && this.state.products.map((product) => html`
            <div class="product-item" key=${product.id}>
              ${product.featuredImage && html`<img class="product-image" src=${product.featuredImage.url} alt=${product.featuredImage.altText} />`}
              <h4 class="product-title">${product.title}</h4>
              <p class="product-price">Price: ${product.priceRange.minVariantPrice.currencyCode} ${product.priceRange.minVariantPrice.amount}</p>
              <button type="button" class="product-button" onClick=${() => this.handleAddToCart(product.variants?.nodes[0])}>Add to cart</button>
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
