import {
  h, Component, Fragment, render,
  // eslint-disable-next-line import/no-unresolved,import/extensions
} from '../../scripts/preact.js';
// eslint-disable-next-line import/no-unresolved,import/extensions
import htm from '../../scripts/htm.js';
import { performGraphqlRequest } from '../../scripts/utils.js';

const html = htm.bind(h);

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: []
    };
  }

  async componentDidMount() {
    const cartInfo = JSON.parse(localStorage.getItem('eds-shopify-cart') ?? '{}');
    if (Object.keys(cartInfo).length) {
      this.setState({
        cartItems: cartInfo.lines.edges,
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
              <h4 class="cmp-cart__item-title">${cartItem.node.merchandise.displayName}</h4>
              <p class="cmp-cart__item-price">Price: $${cartItem.node.merchandise.price.amount}</p>
            </div>
          `)}
        </div>
      <//>
    `;
  }
}

export default function decorate(block) {
  const cart = html`<${Cart} />`;
  render(cart, block);
}
