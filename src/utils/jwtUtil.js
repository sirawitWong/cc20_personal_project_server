import jwt from "jsonwebtoken"

export function signToken(payload) {
	const result = jwt.sign(payload, process.env.JWT_SECRET, { algorithm: "HS256", expiresIn: "7d" })
	return result
}

