import express from "express"
import { getAllIngredient, getIngredientById, searchIngredient } from "../controllers/ingredient.controller.js"

const router = express.Router()

router.get("/ingredients", getAllIngredient)
router.get("/ingredient/:id", getIngredientById)
router.get("/ingredient/", searchIngredient)

export default router
