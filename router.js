import express from "express"
import redeemPoints from "./controller/redeemPoints.js"

const router = express.Router()

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Api page",
  })
})

router.get("/redeemPoints/:customerId", redeemPoints)

export default router
