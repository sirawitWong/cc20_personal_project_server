import {
	serviceAddEquipment,
	serviceAddIngredient,
	serviceBanUser,
	serviceDeleteEquipment,
	serviceDeleteIngredient,
	serviceDeleteUser,
	serviceEditEquipment,
	serviceEditIngredient,
	serviceEditUserRole,
	serviceRegisterAdmin
} from "../services/auth.admin.service.js";

import { createError } from "../utils/createError.js";

export function registerAdmin(req, res, next) {
	try {
		const response = serviceRegisterAdmin()
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function editUserRole(req, res, next) {
	try {
		const { id } = req.params
		const response = serviceEditUserRole(Number(id))
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function deleteUser(req, res, next) {
	try {
		const { id } = req.params
		const response = serviceDeleteUser(Number(id))
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function banUser(req, res, next) {
	try {
		const { id } = req.params
		const response = serviceBanUser(Number(id))
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function addIngredient(req, res, next) {
	try {
		const response = serviceAddIngredient()
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function editIngredient(req, res, next) {
	try {
		const { id } = req.params
		const response = serviceEditIngredient(Number(id))
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function deleteIngredient(req, res, next) {
	try {
		const { id } = req.params
		const response = serviceDeleteIngredient(Number(id))
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function addEquipment(req, res, next) {
	try {
		const response = serviceAddEquipment()
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function editEquipment(req, res, next) {
	try {
		const { id } = req.params
		const response = serviceEditEquipment(Number(id))
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function deleteEquipment(req, res, next) {
	try {
		const { id } = req.params
		const response = serviceDeleteEquipment(Number(id))
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

