import prisma from "../config/prisma.js"

export function serviceGetAllIngredient() {
	return "service get all ingredient"
}

export function serviceGetIngredientById(id) {
	return `service get ingredient ${id}`
}

export function serviceSearchIngredient(name) {
	return `search ingredient ${name}`
}
