import prisma from "../config/prisma.js"

export async function serviceGetAllEquipment() {
	const result = await prisma.equipment.findMany()
	return result
}

export async function serviceGetEquipmentById(id) {
	const result = await prisma.equipment.findUnique({
		where: { id }
	})
	return result
}

export async function serviceSearchEquipment(name) {
	const result = await prisma.equipment.findMany({
		where: { name: { startsWith: name } }
	})
	return result
}
