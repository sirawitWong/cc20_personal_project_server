import {
	serviceGetAllRecipies,
	serviceGetRecipeById,
	serviceSearchRecipe,
	serviceDeleteRecipe,
	serviceEditRecipe,
	serviceGetRecipeReview,
	serviceCreateRecipe
} from "../services/recipe.service.js";

export async function getAllRecipies(req, res, next) {
	try {
		const response = await serviceGetAllRecipies()
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}

export async function getRecipeById(req, res, next) {
	try {
		const { id } = req.params
		const response = await serviceGetRecipeById(Number(id))
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}

export async function searchRecipe(req, res, next) {
	try {
		const name = req.query.name
		const category = req.query.category
		const response = await serviceSearchRecipe(name, category)
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}

export async function createRecipe(req, res, next) {
	try {
		const user = req.user
		const body = req.body
		body.userId = user.id
		const response = await serviceCreateRecipe(body)
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}

export async function deleteRecipe(req, res, next) {
	try {
		const user = req.user
		const { id } = req.params
		const response = await serviceDeleteRecipe(Number(id), user.id)
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}

export async function editRecipe(req, res, next) {
	try {
		const user = req.user
		const body = req.body
		const { id } = req.params
		const response = await serviceEditRecipe(Number(id), user.id, body)
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}

export async function getRecipeReview(req, res, next) {
	try {
		const { id } = req.params
		const response = await serviceGetRecipeReview(Number(id))
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}
