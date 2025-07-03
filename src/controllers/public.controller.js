import { serviceRegister, serviceLogin } from "../services/public.service.js"
import { createError } from "../utils/createError.js"

export function register(req, res, next) {
	try {
		const user = req.body
		console.log(user)
		const response = serviceRegister()
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}

export function login(req, res, next) {
	try {
		const user = req.body
		console.log(user)
		const response = serviceLogin()
		res.status(200).json({ message: response })
	} catch (err) {
		next(err)
	}
}
