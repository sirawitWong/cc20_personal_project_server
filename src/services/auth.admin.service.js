import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";
import bcrypt from "bcryptjs"

export async function serviceRegisterAdmin(firstName, lastName, username, password) {
	const isExist = await prisma.user.findUnique({
		where: { username }
	})
	if (isExist) {
		return createError(400, "username unavaliable")
	}
	const hash = bcrypt.hashSync(password, 13)
	const result = await prisma.user.create({
		data: { firstName, lastName, username, password: hash, role: "ADMIN" }
	})
	return result
}

export async function serviceGetAllUsers() {
	const result = await prisma.user.findMany({ omit: { password: true } })
	return result
}

export async function serviceDeleteUser(id) {
	const isExist = await prisma.user.findUnique({
		where: { id }
	})
	if (!isExist) {
		return createError(400, "this user doesn't exist")
	}
	await prisma.user.delete({
		where: { id }
	})
	return `id: ${id} DELETED`
}

export async function serviceBanUser(id) {
	const isExist = await prisma.user.findUnique({
		where: { id }
	})
	if (!isExist) {
		return createError(400, "this user doesn't exist")
	}
	let banStatus = null
	if (isExist.userStatus === "ACTIVE") {
		banStatus = "BANNED"
	} else {
		banStatus = "ACTIVE"
	}
	await prisma.user.update({
		where: { id },
		data: { userStatus: banStatus }
	})
	return `id: ${id} ${banStatus}`
}

export async function serviceAddIngredient(data) {
	const { name, image, protein, carbohydrate, fat } = data
	const result = await prisma.ingredient.create({
		data: { name, image, protein, carbohydrate, fat }
	})
	return result
}

export async function serviceEditIngredient(id, data) {
	const { name, image, protein, carbohydrate, fat } = data
	const ingredient = await prisma.ingredient.findUnique({
		where: { id }
	})
	if (!ingredient) {
		return createError(400, "this ingredient doesn't exist")
	}
	const result = await prisma.ingredient.update({
		where: { id },
		data: { name, image, protein, carbohydrate, fat }
	})
	return result
}

export async function serviceDeleteIngredient(id) {
	const isExist = await prisma.ingredient.findUnique({
		where: { id }
	})
	if (!isExist) {
		return createError(400, "this ingredient doesn't exist")
	}
	await prisma.ingredient.delete({
		where: { id }
	})
	return `Ingredient id: ${id} DELETED`
}

export async function serviceAddEquipment(data) {
	const { name, image } = data
	const result = await prisma.equipment.create({
		data: { name, image }
	})
	return result
}

export async function serviceEditEquipment(id, data) {
	const { name, image } = data
	const equipment = await prisma.equipment.findUnique({
		where: { id }
	})
	if (!equipment) {
		return createError(400, "this equipment doesn't exist")
	}
	const result = await prisma.equipment.update({
		where: { id },
		data: { name, image }
	})
	return result
}

export async function serviceDeleteEquipment(id) {
	const equipment = await prisma.equipment.findUnique({
		where: { id }
	})
	if (!equipment) {
		return createError(400, "this equipment doesn't exist")
	}
	await prisma.equipment.delete({
		where: { id }
	})
	return `Equipment id: ${id} DELETED`
}
