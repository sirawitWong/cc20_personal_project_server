import { serviceRegister, serviceLogin } from "../services/public.service.js"
import { createError } from "../utils/createError.js"

export async function register(req, res, next) {
	try {
		const { firstName, lastName, username, password } = req.body
		await serviceRegister(firstName, lastName, username, password)
		res.status(200).json({ message: "SUCCESS" })
	} catch (err) {
		next(err)
	}
}

export async function login(req, res, next) {
	try {
		const { username, password } = req.body
		const response = await serviceLogin(username, password)
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}
