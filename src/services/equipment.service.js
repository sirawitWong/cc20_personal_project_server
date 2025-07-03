import prisma from "../config/prisma.js"

export function serviceGetAllEquipment() {
	return "service get all equipment"
}

export function serviceGetEquipmentById(id) {
	return `service get all equipment ${id}`
}

export function serviceSearchEquipment(name) {
	return `search equipment ${name}`
}
