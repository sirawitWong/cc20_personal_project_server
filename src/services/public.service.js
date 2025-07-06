import prisma from "../config/prisma.js"
import { createError } from "../utils/createError.js"
import bcypt from "bcryptjs"
import { signToken } from "../utils/jwtUtil.js"

export async function serviceRegister(firstName, lastName, username, password) {
	const isExist = await prisma.user.findUnique({
		where: { username }
	})
	if (isExist) {
		return createError(400, "This username is already exist")
	}
	const hash = bcypt.hashSync(password, 8)
	const result = await prisma.user.create({
		data: { firstName, lastName, username, password: hash }
	})
	return result
}

export async function serviceLogin(username, password) {
	const user = await prisma.user.findUnique({
		where: { username }
	})
	if (!user) {
		return createError(400, "This username doesn't exist")
	}
	if (user.userStatus === "BANNED") {
		return createError(400, "this user has been banned")
	}
	const isMatch = bcypt.compareSync(password, user.password)
	if (!isMatch) {
		return createError(400, "incorrect password")
	}
	const payload = { id: user.id, role: user.role }
	const token = signToken(payload)
	const result = { payload, token }
	return result
}
