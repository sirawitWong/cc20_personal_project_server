import { serviceGetAllEquipment, serviceGetEquipmentById, serviceSearchEquipment } from "../services/equipment.service.js"
import { createError } from "../utils/createError.js"

export async function getAllEquipment(req, res, next) {
	try {
		const response = await serviceGetAllEquipment()
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export async function getEquipmentById(req, res, next) {
	try {
		const { id } = req.params
		const response = await serviceGetEquipmentById(Number(id))
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export async function searchEquipment(req, res, next) {
	try {
		const name = req.query.name
		const response = await serviceSearchEquipment(name)
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}
