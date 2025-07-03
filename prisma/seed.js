import prisma from "../src/config/prisma.js";
import bcrypt from "bcryptjs"

const hashedPassword = bcrypt.hashSync("123456", 7)

const userData = [
	{ firstName: "john", lastName: "cook", username: "JOHN", password: hashedPassword },
	{ firstName: "jane", lastName: "cook", username: "JANE", password: hashedPassword },
	{ firstName: "jack", lastName: "cooker", username: "JACK", password: hashedPassword },
]

const ingredientData = [
	{ name: "potato", protein: 1, carbohydrate: 2, fat: 1 },
	{ name: "tomato", protein: 1, carbohydrate: 1, fat: 1 },
	{ name: "butter", protein: 1, carbohydrate: 1, fat: 2 },
]

const equipmentData = [
	{ name: "oven" },
	{ name: "pot" },
	{ name: "pan" },
]

async function seedDB() {
	await prisma.user.createMany({ data: userData, skipDuplicates: true })
	await prisma.ingredient.createMany({ data: ingredientData, skipDuplicates: true })
	await prisma.equipment.createMany({ data: equipmentData, skipDuplicates: true })
}

seedDB().then(console.log("SEEDED"))
	.catch(err => console.log(err))
	.finally(prisma.$disconnect())
