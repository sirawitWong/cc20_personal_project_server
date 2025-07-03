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
	editUserRole,
	registerAdmin
} from "../controllers/auth.admin.controller.js"

const router = express.Router()

router.post("/auth/admin/register", registerAdmin)
router.patch("/auth/admin/role/:id", editUserRole)
router.delete("/auth/admin/delete/user/:id", deleteUser)
router.patch("/auth/admin/ban/:id", banUser)
router.post("/auth/admin/add/ingredient", addIngredient)
router.patch("/auth/admin/edit/ingredient/:id", editIngredient)
router.delete("/auth/admin/delete/ingredient/:id", deleteIngredient)
router.post("/auth/admin/add/equipment", addEquipment)
router.patch("/auth/admin/edit/equipment/:id", editEquipment)
router.delete("/auth/admin/delete/equipment/:id", deleteEquipment)

export default router
