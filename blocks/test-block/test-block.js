import { shopifyClient } from '../../scripts/shopify.js';

export default function decorate(block) {
  console.log('shopifyClient', shopifyClient);
}
