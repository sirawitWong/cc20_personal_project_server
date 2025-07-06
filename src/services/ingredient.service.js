import prisma from "../config/prisma.js"

export async function serviceGetAllIngredient() {
	const result = await prisma.ingredient.findMany()
	return result
}

export async function serviceGetIngredientById(id) {
	const result = await prisma.ingredient.findUnique({
		where: { id }
	})
	return result
}

export async function serviceSearchIngredient(name) {
	const result = await prisma.ingredient.findMany({
		where: { name: { startsWith: name } }
	})
	return result
}
