import {
	serviceGetAllRecipies,
	serviceGetRecipeById,
	serviceSearchRecipe,
	serviceDeleteRecipe,
	serviceEditRecipe,
	serviceGetRecipeReview
} from "../services/recipe.service.js";

export function getAllRecipies(req, res, next) {
	try {
		const response = serviceGetAllRecipies()
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function getRecipeById(req, res, next) {
	try {
		const { id } = req.params
		const response = serviceGetRecipeById(Number(id))
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function searchRecipe(req, res, next) {
	try {
		const name = req.query.name
		const category = req.query.category
		const response = serviceSearchRecipe(name, category)
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function deleteRecipe(req, res, next) {
	try {
		const { id } = req.params
		const response = serviceDeleteRecipe(Number(id))
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function editRecipe(req, res, next) {
	try {
		const { id } = req.params
		const response = serviceEditRecipe(Number(id))
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function getRecipeReview(req, res, next) {
	try {
		const response = serviceGetRecipeReview()
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}
