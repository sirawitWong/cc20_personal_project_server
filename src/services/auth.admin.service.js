import prisma from "../config/prisma.js";

export function serviceRegisterAdmin() {
	return "service register admin"
}

export function serviceEditUserRole(id) {
	return `edit role ${id}`
}

export function serviceDeleteUser(id) {
	return `delete user ${id}`
}

export function serviceBanUser(id) {
	return `ban user ${id}`
}

export function serviceAddIngredient() {
	return "add ingredient"
}

export function serviceEditIngredient(id) {
	return `edit ingredient ${id}`
}

export function serviceDeleteIngredient(id) {
	return `delete ingredient ${id}`
}

export function serviceAddEquipment() {
	return "add equipment"
}

export function serviceEditEquipment(id) {
	return `edit equipment ${id}`
}

export function serviceDeleteEquipment(id) {
	return `delete equipment ${id}`
}
