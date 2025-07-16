import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";

export async function serviceGetMe(id) {
	const result = await prisma.user.findUnique({
		where: { id },
		omit: { password: true }
	})
	return result
}

export async function serviceEditUser(id, data) {
	const user = await prisma.user.findUnique({ where: { id } })
	if (!user) {
		return createError(400, "this user doesn't exist")
	}
	const result = await prisma.user.updateMany({
		where: { id },
		data
	})
	return result
}

//export async function serviceGetFollower(id) {
//	const result = await prisma.user.findUnique({
//		where: { id },
//		include: { follower }
//	})
//	return result
//}

//export async function serviceGetFollowing(id) {
//	const result = await prisma.user.findUnique({
//		where: { id },
//		include: { following }
//	})
//	return result
//}

//export async function serviceFollow(id, toId) {
//	const result = await prisma.user.update({
//		where: { id },
//		data: { following: toId }
//	})
//	return result
//}

//export async function serviceUnfollow(id, toId) {
//	const result = await prisma.user.delete({
//		where: { id }
//	})
//	return result
//}
