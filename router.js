import express from "express"
import redeemPoints from "./controller/redeemPoints.js"

const router = express.Router()

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Api page",
  })
})

router.get("/redeemPoints/:customerId", redeemPoints)

router.get("/test", (req, res) => {
  console.log({ req })
  res.status(200).json({
    message: "Test get endpoint",
  })
})

router.post("/test", (req, res) => {
  console.log({ req })
  res.status(200).json({
    message: "Test post endpoint",
  })
})

export default router
