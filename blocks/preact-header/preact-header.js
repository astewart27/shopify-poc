import {
  h, Component, Fragment, render,
  // eslint-disable-next-line import/no-unresolved,import/extensions
} from '../../scripts/preact.js';
// eslint-disable-next-line import/no-unresolved,import/extensions
import htm from '../../scripts/htm.js';
import { PUBLIC_STOREFRONT_API_TOKEN, GRAPHQL_ENDPOINT } from '../../constants/index.js';

const html = htm.bind(h);

function App() {
  return html`
    <div>
      <h1>Preact header component</h1>
      <p>This is a description text</p>
    </div>
  `;
}

const performGraphqlRequest = async () => {
  const query = `
    {
      products(first: 10) {
        edges {
          node {
            id
            title
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
  const products = result.data?.products?.edges;

  return products;
};

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const products = await performGraphqlRequest();
    this.setState({
      products,
    });
  }

  async componentDidUpdate() {
    console.log('Component updated...', this);
  }

  render() {
    return html`
      <${Fragment}>
        <div class="product-details">
          <h3>Product Details</h3>
          ${this.state.products.length > 0 && this.state.products.map((product) => html`
            <div key=${product.node.id}>${product.node.title}</div>
          `)}
        </div>
      <//>
    `;
  }
}

export default function decorate(block) {
  const app2 = html`<${App}/>`;
  const productDetails = html`<${ProductDetails} />`;
  //render(app2, block.parentElement);
  //render(productDetails, block);
}
