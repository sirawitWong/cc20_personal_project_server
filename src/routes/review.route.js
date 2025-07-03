import express from "express"
import { createReview, deleteReview, editReview, getReviewById } from "../controllers/review.controller.js"

const router = express.Router()

router.get("/review/:id", getReviewById)
router.post("/auth/review", createReview)
router.patch("/auth/review", editReview)
router.delete("/auth/review/:id", deleteReview)

export default router
