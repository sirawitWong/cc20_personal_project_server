import { serviceGetAllIngredient, serviceGetIngredientById, serviceSearchIngredient } from "../services/ingredient.service.js"

export async function getAllIngredient(req, res, next) {
	try {
		const response = await serviceGetAllIngredient()
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}

export async function getIngredientById(req, res, next) {
	try {
		const { id } = req.params
		const response = await serviceGetIngredientById(Number(id))
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}

export async function searchIngredient(req, res, next) {
	try {
		const name = req.query.name
		const response = await serviceSearchIngredient(name)
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}
