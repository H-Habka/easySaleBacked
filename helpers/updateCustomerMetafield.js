import { client } from "../index.js"

async function updateCustomerMetafield({ customerId, metafieldId, newValue }) {
  if (!customerId) throw new Error("invalid customer ID")

  try {
    return await client.put({
      path: `customers/${customerId}/metafields/${metafieldId}`,
      data: {
        metafield: {
          id: metafieldId,
          value: newValue,
          value_type: "integer", // Use appropriate value type, like `integer` or `json_string`
        },
      },
      type: "application/json",
    })
  } catch (error) {
    console.error("Error updating metafield:", error)
  }
}

export default updateCustomerMetafield
