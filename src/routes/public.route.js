import express from "express"
import { register, login } from "../controllers/public.controller.js"
import { registerSchema, loginSchema, validate } from "../middlewares/validator.js"

const router = express.Router()

router.post("/register", validate(registerSchema), register)
router.post("/login", validate(loginSchema), login)

export default router
