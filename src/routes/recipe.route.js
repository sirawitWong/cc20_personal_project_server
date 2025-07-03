import express from "express"
import {
	deleteRecipe,
	editRecipe,
	getAllRecipies,
	getRecipeById,
	getRecipeReview,
	searchRecipe
} from "../controllers/recipe.controller.js"

const router = express.Router()

router.get("/recipies", getAllRecipies)
router.get("/recipe/:id", getRecipeById)
router.get("/search/recipe", searchRecipe)
router.get("/reviews/recipe", getRecipeReview)
router.delete("/auth/recipe/:id", deleteRecipe)
router.patch("/auth/recipe/:id", editRecipe)

export default router
