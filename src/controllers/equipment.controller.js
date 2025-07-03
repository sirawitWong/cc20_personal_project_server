import { serviceGetAllEquipment, serviceGetEquipmentById, serviceSearchEquipment } from "../services/equipment.service"
import { createError } from "../utils/createError.js"

export function getAllEquipment(req, res, next) {
	try {
		const response = serviceGetAllEquipment()
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function getEquipmentById(req, res, next) {
	try {
		const { id } = req.params
		const response = serviceGetEquipmentById(Number(id))
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function searchEquipment(req, res, next) {
	try {
		const name = req.query.name
		const response = serviceSearchEquipment(name)
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}
