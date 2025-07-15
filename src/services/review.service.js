import prisma from "../config/prisma.js"
import { createError } from "../utils/createError.js"

export async function serviceGetReviewById(id) {
	const result = await prisma.review.findUnique({
		where: { id }
	})
	return result
}

export async function serviceCreateReview(data) {
	const result = await prisma.review.create({ data })
	return result
}

export async function serviceEditReview(id, userId, data) {
	const review = await prisma.review.findUnique({
		where: { id }
	})
	if (!review) {
		return createError(400, "review doesn't exist")
	}
	if (review.userId !== userId) {
		return createError(400, "you can only edit your own review")
	}
	const result = await prisma.review.update({
		where: { id },
		data
	})
	return result
}

export async function serviceDeleteReview(id) {
	const review = await prisma.review.findUnique({
		where: { id }
	})
	if (!review) {
		return createError(400, "review doesn't exist")
	}
	if (review.userId !== userId) {
		return createError(400, "you can only edit your own review")
	}
	await prisma.review.delete({
		where: { id }
	})
	return `Review id: ${id} DELETED`
}    
