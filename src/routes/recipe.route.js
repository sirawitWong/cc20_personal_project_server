import express from "express"
import {
	createRecipe,
	deleteRecipe,
	editRecipe,
	getAllRecipies,
	getRecipeById,
	getRecipeReview,
	searchRecipe
} from "../controllers/recipe.controller.js"
import { authCheck } from "../middlewares/authen.middleware.js"

const router = express.Router()

router.get("/recipies", getAllRecipies)
router.get("/recipe/:id", getRecipeById)
router.get("/search/recipe", searchRecipe)
router.get("/reviews/recipe/:id", getRecipeReview)
router.post("/auth/recipe", authCheck, createRecipe)
router.delete("/auth/recipe/:id", authCheck, deleteRecipe)
router.patch("/auth/recipe/:id", authCheck, editRecipe)

export default router
