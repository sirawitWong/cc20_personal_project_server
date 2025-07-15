import express from "express"
import {
	addEquipment,
	addIngredient,
	banUser,
	deleteEquipment,
	deleteIngredient,
	deleteUser,
	editEquipment,
	editIngredient,
	getAllUsers,
	registerAdmin
} from "../controllers/auth.admin.controller.js"
import { authCheck } from "../middlewares/authen.middleware.js"
import { equipmentSchema, ingredientSchema, registerSchema, validate } from "../middlewares/validator.js"

const router = express.Router()

router.post("/auth/admin/register", authCheck, validate(registerSchema), registerAdmin)
router.get("/auth/admin/users", authCheck, getAllUsers)
router.delete("/auth/admin/delete/user/:id", authCheck, deleteUser)
router.patch("/auth/admin/ban/:id", authCheck, banUser)
router.post("/auth/admin/add/ingredient", authCheck, validate(ingredientSchema), addIngredient)
router.patch("/auth/admin/edit/ingredient/:id", authCheck, validate(ingredientSchema), editIngredient)
router.delete("/auth/admin/delete/ingredient/:id", authCheck, deleteIngredient)
router.post("/auth/admin/add/equipment", authCheck, validate(equipmentSchema), addEquipment)
router.patch("/auth/admin/edit/equipment/:id", authCheck, validate(equipmentSchema), editEquipment)
router.delete("/auth/admin/delete/equipment/:id", authCheck, deleteEquipment)

export default router
