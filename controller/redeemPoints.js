import { calculateGiftCardBalanceFromPoints } from "../helpers/index.js"
import createGiftCard from "../helpers/createGiftCard.js"
import updateCustomerMetafield from "../helpers/updateCustomerMetafield.js"
import { client } from "../index.js"

async function redeemPoints(req, res) {
  const customerId = req.params.customerId

  const customerMetafields = await client.get({
    path: `customers/${customerId}/metafields`,
  })

  const pointsMetafield = customerMetafields?.body?.metafields?.find(
    (item) => item.key === "points"
  )

  const giftCardBalance = calculateGiftCardBalanceFromPoints(
    pointsMetafield?.value
  )

  const giftCardDetails = await createGiftCard({
    send_email: true,
    initialBalance: giftCardBalance,
    customerId,
  })

  await updateCustomerMetafield({
    customerId,
    metafieldId: pointsMetafield?.id,
    newValue: 0,
  })

  res.status(200).json({
    giftCardCode: giftCardDetails?.body?.gift_card?.code,
  })
}

export default redeemPoints
