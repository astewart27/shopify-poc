import {
  h, Component, Fragment, render,
  // eslint-disable-next-line import/no-unresolved,import/extensions
} from '../../scripts/preact.js';
// eslint-disable-next-line import/no-unresolved,import/extensions
import htm from '../../scripts/htm.js';

const html = htm.bind(h);

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      checkoutUrl: '',
    };
  }

  async componentDidMount() {
    const cartInfo = JSON.parse(localStorage.getItem('eds-shopify-cart') ?? '{}');
    if (Object.keys(cartInfo).length) {
      this.setState({
        cartItems: cartInfo.lines.edges,
        checkoutUrl: cartInfo.checkoutUrl,
      });
    }
  }

  render() {
    return html`
      <${Fragment}>
        <div class="cmp-cart">
          ${this.state.cartItems.length > 0 && this.state.cartItems.map((cartItem) => html`
            <div class="cmp-cart__item" key=${cartItem.node.id}>
              <img class="cmp-cart__item-image" src=${cartItem.node.merchandise.image.url} alt=${cartItem.node.merchandise.image.altText} />
              <h4 class="cmp-cart__item-title">${cartItem.node.merchandise.product.title}</h4>
              <p class="cmp-cart__item-price">$${cartItem.node.merchandise.price.amount}</p>
            </div>
          `)}
        </div>
        ${this.state.checkoutUrl && html`
          <div class="cmp-checkout">
            <a href=${this.state.checkoutUrl} class="cmp-checkout__url primary">
              <span>Checkout</span>
            </a>
          </div>
        `}
      <//>
    `;
  }
}

export default function decorate(block) {
  const cart = html`<${Cart} />`;
  render(cart, block);
}
