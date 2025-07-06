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
	//editUserRole,
	registerAdmin
} from "../controllers/auth.admin.controller.js"
import { authCheck } from "../middlewares/authen.middleware.js"
import { registerSchema, validate } from "../middlewares/validator.js"

const router = express.Router()

router.post("/auth/admin/register", authCheck, validate(registerSchema), registerAdmin)
//router.patch("/auth/admin/role/:id", authCheck, editUserRole)
router.delete("/auth/admin/delete/user/:id", authCheck, deleteUser)
router.patch("/auth/admin/ban/:id", authCheck, banUser)
router.post("/auth/admin/add/ingredient", authCheck, addIngredient)
router.patch("/auth/admin/edit/ingredient/:id", authCheck, editIngredient)
router.delete("/auth/admin/delete/ingredient/:id", authCheck, deleteIngredient)
router.post("/auth/admin/add/equipment", authCheck, addEquipment)
router.patch("/auth/admin/edit/equipment/:id", authCheck, editEquipment)
router.delete("/auth/admin/delete/equipment/:id", authCheck, deleteEquipment)

export default router
