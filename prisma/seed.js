import prisma from "../src/config/prisma.js";
import bcrypt from "bcryptjs"

const hashedPassword = bcrypt.hashSync("123456", 7)

const userData = [
	{ firstName: "super", lastName: "admin", username: "SUPER", password: hashedPassword, role: "SUPER" },
	{ firstName: "admin", lastName: "admin", username: "ADMIN", password: hashedPassword, role: "ADMIN" },
	{ firstName: "test", lastName: "user", username: "USER1", password: hashedPassword },
	{ firstName: "test", lastName: "user", username: "USER2", password: hashedPassword },
	{ firstName: "test", lastName: "user", username: "USER3", password: hashedPassword },
	{ firstName: "test", lastName: "user", username: "USER4", password: hashedPassword },
	{ firstName: "test", lastName: "user", username: "USER5", password: hashedPassword },
	{ firstName: "test", lastName: "user", username: "USER6", password: hashedPassword },
	{ firstName: "test", lastName: "user", username: "USER7", password: hashedPassword },
	{ firstName: "test", lastName: "user", username: "USER8", password: hashedPassword },
	{ firstName: "test", lastName: "user", username: "USER9", password: hashedPassword },
	{ firstName: "test", lastName: "user", username: "USER10", password: hashedPassword },
]

const ingredientData = [
	{ name: "potato", protein: 0.5, carbohydrate: 5, fat: 1 },
	{ name: "tomato", protein: 1.5, carbohydrate: 3, fat: 1 },
	{ name: "butter", protein: 0.3, carbohydrate: 1, fat: 5 },
	{ name: "chicken", protein: 4.5, carbohydrate: 2, fat: 1 },
	{ name: "pork", protein: 4.2, carbohydrate: 2, fat: 4 },
	{ name: "beef", protein: 5, carbohydrate: 2, fat: 2 },
]

const equipmentData = [
	{ name: "oven" },
	{ name: "pot" },
	{ name: "pan" },
	{ name: "knife" },
	{ name: "stove" },
]

async function seedDB() {
	await prisma.user.createMany({ data: userData, skipDuplicates: true })
	await prisma.ingredient.createMany({ data: ingredientData, skipDuplicates: true })
	await prisma.equipment.createMany({ data: equipmentData, skipDuplicates: true })
}

seedDB().then(console.log("SEEDED"))
	.catch(err => console.log(err))
	.finally(prisma.$disconnect())
