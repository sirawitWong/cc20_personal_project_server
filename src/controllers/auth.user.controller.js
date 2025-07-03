import {
	serviceEditUser,
	serviceFollow,
	serviceGetFollower,
	serviceGetFollowing,
	serviceGetMe,
	serviceUnfollow
} from "../services/auth.user.service.js";

import { createError } from "../utils/createError.js";

export function getMe(req, res, next) {
	try {
		const response = serviceGetMe()
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function editUser(req, res, next) {
	try {
		const response = serviceEditUser()
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function getFollower(req, res, next) {
	try {
		const response = serviceGetFollower()
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function getFollowing(req, res, next) {
	try {
		const response = serviceGetFollowing()
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function follow(req, res, next) {
	try {
		const response = serviceFollow()
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function unfollow(req, res, next) {
	try {
		const response = serviceUnfollow()
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}
