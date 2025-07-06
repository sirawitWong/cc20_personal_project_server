import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";

export async function serviceGetAllRecipies() {
	const result = await prisma.recipe.findMany()
	return result
}

export async function serviceGetRecipeById(id) {
	const result = await prisma.recipe.findUnique({
		where: { id }
	})
	return result
}

export async function serviceSearchRecipe(name, category) {
	if (name && !category) {
		const result = await prisma.recipe.findMany({
			where: { name: { contains: name } }
		})

		return result
	} else if (!name && category) {
		const result = await prisma.recipe.findMany({
			where: { category: category }
		})
		return result
	} else {
		const result = await prisma.recipe.findMany({
			where: {
				AND: [{ name: { contains: name } }, { category: category }]
			}
		})
		return result
	}
}

// later
export async function serviceCreateRecipe() {
	return `create recipe `
}

export async function serviceDeleteRecipe(id, user) {
	const isExist = await prisma.recipe.findUnique({
		where: { id }
	})
	if (!isExist) {
		createError(400, "this recipe doesn't exist")
	}
	await prisma.recipe.delete({
		where: { id }
	})
	return `Recipe id: ${id} DELETED`
}

// later
export async function serviceEditRecipe(id, user, data) {
	const isExist = await prisma.recipe.findUnique({
		where: { id }
	})
	if (!isExist) {
		createError(400, "this recipe doesn't exist")
	}
	const result = data
	return result
}

export async function serviceGetRecipeReview(id) {
	const recipe = await prisma.recipe.findUnique({
		where: { id }
	})
	return recipe
}
