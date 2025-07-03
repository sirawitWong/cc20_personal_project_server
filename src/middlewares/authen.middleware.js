import jwt from "jsonwebtoken"
import { createError } from "../utils/createError.js"

export function authCheck(req, res, next) {
	try {
		const header = req.headers.authorization
		if (!header) {
			createError(401, "Unauthorize")
		}
		const token = header.split(" ")[1]
		jwt.verify(token, process.env.JWT_SECRET, (error, decode) => {
			if (error) {
				createError(401, "Unauthorize")
			}
			req.user = decode
			next()
		})
	} catch (err) {
		next(err)
	}
}

