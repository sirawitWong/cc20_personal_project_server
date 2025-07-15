import {
	serviceAddEquipment,
	serviceAddIngredient,
	serviceBanUser,
	serviceDeleteEquipment,
	serviceDeleteIngredient,
	serviceDeleteUser,
	serviceEditEquipment,
	serviceEditIngredient,
	serviceRegisterAdmin,
	serviceGetAllUsers
} from "../services/auth.admin.service.js";

import { createError } from "../utils/createError.js";

export async function registerAdmin(req, res, next) {
	try {
		const user = req.user
		if (user.role !== "SUPER") {
			createError(403, "only super can do this")
		}
		const { firstName, lastName, username, password } = req.body
		const response = await serviceRegisterAdmin(firstName, lastName, username, password)
		res.status(200).json({ result: "SUCCESS" })
	} catch (err) {
		next(err)
	}
}

export async function getAllUsers(req, res, next) {
	try {
		const user = req.user
		if (user.role !== "SUPER") {
			createError(403, "only super can do this")
		}
		const response = await serviceGetAllUsers()
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}

export async function deleteUser(req, res, next) {
	try {
		const user = req.user
		if (user.role !== "SUPER") {
			createError(403, "only super can do this")
		}
		const { id } = req.params
		if (user.id === Number(id)) {
			createError(400, "cannot delete yourself")
		}
		const response = await serviceDeleteUser(Number(id))
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}

export async function banUser(req, res, next) {
	try {
		const user = req.user
		if (user.role !== "SUPER") {
			createError(403, "only super can do this")
		}
		const { id } = req.params
		if (user.id === Number(id)) {
			createError(400, "cannot ban yourself")
		}
		const response = await serviceBanUser(Number(id))
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}

export async function addIngredient(req, res, next) {
	try {
		const allow = ["ADMIN", "SUPER"]
		const role = req.user.role
		if (!allow.includes(role)) {
			createError(403, "you don't have permission to do this")
		}
		const data = req.body
		const response = await serviceAddIngredient(data)
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}

export async function editIngredient(req, res, next) {
	try {
		const allow = ["ADMIN", "SUPER"]
		const role = req.user.role
		if (!allow.includes(role)) {
			createError(403, "you don't have permission to do this")
		}
		const data = req.body
		const { id } = req.params
		const response = await serviceEditIngredient(Number(id), data)
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}

export async function deleteIngredient(req, res, next) {
	try {
		const allow = ["ADMIN", "SUPER"]
		const role = req.user.role
		if (!allow.includes(role)) {
			createError(403, "you don't have permission to do this")
		}
		const { id } = req.params
		const response = await serviceDeleteIngredient(Number(id))
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}

export async function addEquipment(req, res, next) {
	try {
		const allow = ["ADMIN", "SUPER"]
		const role = req.user.role
		if (!allow.includes(role)) {
			createError(403, "you don't have permission to do this")
		}
		const data = req.body
		const response = await serviceAddEquipment(data)
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}

export async function editEquipment(req, res, next) {
	try {
		const allow = ["ADMIN", "SUPER"]
		const role = req.user.role
		if (!allow.includes(role)) {
			createError(403, "you don't have permission to do this")
		}
		const data = req.body
		const { id } = req.params
		const response = await serviceEditEquipment(Number(id), data)
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}

export async function deleteEquipment(req, res, next) {
	try {
		const allow = ["ADMIN", "SUPER"]
		const role = req.user.role
		if (!allow.includes(role)) {
			createError(403, "you don't have permission to do this")
		}
		const data = req.body
		const { id } = req.params
		const response = await serviceDeleteEquipment(Number(id), data)
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}

