import {
	serviceEditUser,
	serviceGetMe,
	//serviceFollow,
	//serviceGetFollower,
	//serviceGetFollowing,
	//serviceUnfollow
} from "../services/auth.user.service.js";

import { createError } from "../utils/createError.js";

export async function getMe(req, res, next) {
	try {
		const user = req.user
		const result = await serviceGetMe(user.id)
		res.status(200).json({ result })
	} catch (err) {
		next(err)
	}
}

export async function editUser(req, res, next) {
	try {
		const user = req.user
		const data = req.body
		const response = await serviceEditUser(user.id, data)
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}

//export async function getFollower(req, res, next) {
//	try {
//		const user = req.user
//		const response = await serviceGetFollower()
//		res.status(200).json({ message: response })
//	} catch (err) {
//		next(err)
//	}
//}

//export async function getFollowing(req, res, next) {
//	try {
//		const user = req.user
//		const response = await serviceGetFollowing()
//		res.status(200).json({ message: response })
//	} catch (err) {
//		next(err)
//	}
//}

//export async function follow(req, res, next) {
//	try {
//		const user = req.user
//		const followToId = req.body.id
//		const response = await serviceFollow(user.id, followToId)
//		res.status(200).json({ message: response })
//	} catch (err) {
//		next(err)
//	}
//}

//export async function unfollow(req, res, next) {
//	try {
//		const user = req.user
//		const followToId = req.body.id
//		const response = await serviceUnfollow(user.id, followToId)
//		res.status(200).json({ message: response })
//	} catch (err) {
//		next(err)
//	}
//}
