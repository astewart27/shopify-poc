import { createStorefrontApiClient } from "@shopify/storefront-api-client";
import { PUBLIC_STORE_DOMAIN, PUBLIC_STOREFRONT_API_TOKEN } from "../constants/index.js";

const setupStorefrontApiClient = () => {
  const client = createStorefrontApiClient({
    storeDomain: `${PUBLIC_STORE_DOMAIN}`,
    apiVersion: '2024-04',
    publicAccessToken: `${PUBLIC_STOREFRONT_API_TOKEN}`,
  });

  return client;
};