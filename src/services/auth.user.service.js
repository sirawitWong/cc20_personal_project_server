import prisma from "../config/prisma.js";

export async function serviceEditUser(id, data) {
	//const result = await prisma.user.updateMany({
	//	where: { id },
	//	data: { username }
	//})
	return data
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
