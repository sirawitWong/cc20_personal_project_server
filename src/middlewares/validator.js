import { object, ref, string } from "yup";

export const registerSchema = object({
	firstName: string(),
	lastName: string(),
	username: string(),
	password: string(),
	confirmPassword: string().oneOf([ref("password"), null])
})

export const loginSchema = object({
	username: string(),
	password: string()
})

export const validate = (schema) => async (req, res, next) => {
	try {
		await schema.validate(req.body, { abortEarly: false })
		next()
	} catch (err) {
		const errorMessage = err.errors.map((e) => e)
		const errorText = errorMessage.join(", ")
		const allErr = new Error(errorText)
		next(allErr)
	}
}
