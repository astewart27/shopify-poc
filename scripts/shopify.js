import './storefront-api-client.min.js';
import { PUBLIC_STORE_DOMAIN, PUBLIC_STOREFRONT_API_TOKEN } from '../constants/index.js';

export const shopifyClient = ShopifyStorefrontAPIClient.createStorefrontApiClient({
  storeDomain: `${PUBLIC_STORE_DOMAIN}`,
  apiVersion: '2024-04',
  publicAccessToken: `${PUBLIC_STOREFRONT_API_TOKEN}`,
});
