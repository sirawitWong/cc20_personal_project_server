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
export async function serviceCreateRecipe(data) {
	const result = await prisma.recipe.create({ data })
	return result
}

export async function serviceDeleteRecipe(id, userId) {
	const recipe = await prisma.recipe.findUnique({
		where: { id }
	})
	if (!recipe) {
		return createError(400, "this recipe doesn't exist")
	}
	if (recipe.userId !== userId) {
		return createError(400, "you can only delete your own recipe")
	}
	await prisma.recipe.delete({
		where: { id }
	})
	return `Recipe id: ${id} DELETED`
}

// later
export async function serviceEditRecipe(id, userId, data) {
	const recipe = await prisma.recipe.findUnique({
		where: { id }
	})
	if (!recipe) {
		return createError(400, "this recipe doesn't exist")
	}
	if (recipe.userId !== userId) {
		return createError(400, "you can only delete your own recipe")
	}
	const result = await prisma.recipe.update({ where: { id }, data })
	return result
}

export async function serviceGetRecipeReview(id) {
	const recipe = await prisma.review.findMany({
		where: { recipeId: id }
	})
	return recipe
}
