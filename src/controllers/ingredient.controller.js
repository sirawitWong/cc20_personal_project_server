import { serviceGetAllIngredient, serviceGetIngredientById, serviceSearchIngredient } from "../services/ingredient.service.js"
import { createError } from "../utils/createError.js"

export function getAllIngredient(req, res, next) {
	try {
		const response = serviceGetAllIngredient()
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function getIngredientById(req, res, next) {
	try {
		const { id } = req.params
		const response = serviceGetIngredientById(Number(id))
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function searchIngredient(req, res, next) {
	try {
		const name = req.query.name
		const response = serviceSearchIngredient(name)
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}
