import {
	serviceCreateReview,
	serviceDeleteReview,
	serviceEditReview,
	serviceGetReviewById
} from "../services/review.service.js"

import { createError } from "../utils/createError.js"

export async function getReviewById(req, res, next) {
	try {
		const { id } = req.params
		const response = await serviceGetReviewById(Number(id))
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}

export async function createReview(req, res, next) {
	try {
		const user = req.user
		const body = req.body
		const response = await serviceCreateReview()
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}

export async function editReview(req, res, next) {
	try {
		const user = req.user
		const body = req.body
		console.log(body)
		const response = await serviceEditReview()
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}

export async function deleteReview(req, res, next) {
	try {
		const user = req.user
		const { id } = req.params
		const response = await serviceDeleteReview(Number(id))
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}
