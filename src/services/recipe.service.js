import prisma from "../config/prisma.js";

export function serviceGetAllRecipies() {
	return "get all recipies"
}

export function serviceGetRecipeById(id) {
	return `get recipe by id ${id}`
}

export function serviceSearchRecipe(name, category) {
	return `search recipe ${name}, ${category}`
}

export function serviceDeleteRecipe(id) {
	return `delete recipe ${id}`
}

export function serviceEditRecipe(id) {
	return `edit recipe ${id}`
}

export function serviceGetRecipeReview() {
	return "get recipe reviews"
}
