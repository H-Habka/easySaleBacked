import { client } from "../index.js"

async function createGiftCard({
  initialBalance = 0,
  note = "",
  customerId,
  send_email = true,
}) {
  if (!customerId) throw new Error("invalid customer ID")
  return await client.post({
    path: "gift_cards",
    data: {
      gift_card: {
        initial_value: initialBalance,
        note: note,
        customer_id: customerId, // Assign gift card to customer ID
        send_email: send_email, // Enable email sending
      },
    },
    type: "application/json",
  })
}

export default createGiftCard
