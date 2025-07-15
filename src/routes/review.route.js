import express from "express"
import { createReview, deleteReview, editReview, getReviewById } from "../controllers/review.controller.js"
import { authCheck } from "../middlewares/authen.middleware.js"

const router = express.Router()

router.get("/review/:id", getReviewById)
router.post("/auth/review", authCheck, createReview)
router.patch("/auth/review/:id", authCheck, editReview)
router.delete("/auth/review/:id", authCheck, deleteReview)

export default router
