import { shopifyApi, LATEST_API_VERSION } from "@shopify/shopify-api"

const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY || "test",
  apiSecretKey: process.env.SHOPIFY_SECRET_KEY || "test",
  scopes: [],
  hostName: process.env.SHOPIFY_HOSTNAME || "test",
  apiVersion: LATEST_API_VERSION,
})

export default shopify
