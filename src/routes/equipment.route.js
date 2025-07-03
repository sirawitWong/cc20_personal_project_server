import express from "express"
import { getAllEquipment, getEquipmentById, searchEquipment } from "../controllers/equipment.controller.js"

const router = express.Router()

router.get("/equipments", getAllEquipment)
router.get("/equipment/:id", getEquipmentById)
router.get("/equipment/", searchEquipment)

export default router
