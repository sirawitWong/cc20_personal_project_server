import {
	serviceCreateReview,
	serviceDeleteReview,
	serviceEditReview,
	serviceGetReviewById
} from "../services/review.service.js"

import { createError } from "../utils/createError.js"

export function getReviewById(req, res, next) {
	try {
		const { id } = req.params
		const response = serviceGetReviewById(Number(id))
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function createReview(req, res, next) {
	try {
		const response = serviceCreateReview()
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function editReview(req, res, next) {
	try {
		const response = serviceEditReview()
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function deleteReview(req, res, next) {
	try {
		const { id } = req.params
		const response = serviceDeleteReview(Number(id))
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}
