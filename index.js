import "@shopify/shopify-api/adapters/node"
import express from "express"
import cors from "cors"
import router from "./router.js"
import dotenv from "dotenv"
import shopify from "./shopifyAPI.js"

const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()
const PORT = process.env.PORT || 3000

export const client = new shopify.clients.Rest({
  session: {
    shop: process.env.SHOPIFY_HOSTNAME,
    accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  },
})

app.use("/", router)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
