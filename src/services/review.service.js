import prisma from "../config/prisma.js"

export function serviceGetReviewById(id) {
	return `service get review by id ${id}`
}

export function serviceCreateReview() {
	return "create review"
}

export function serviceEditReview() {
	return "edit review"
}

export function serviceDeleteReview(id) {
	return `delete review ${id}`
}    
