import { object, ref, string } from "yup";

export const registerSchema = object({
	firstName: string().min(2).max(32).required("first name required"),
	lastName: string().min(2).max(32).required("last name required"),
	username: string().min(4).max(24).required("username required"),
	password: string().min(6).max(24).required("password required"),
	confirmPassword: string().oneOf([ref("password"), null])
})

export const loginSchema = object({
	username: string().min(4, "username is minimum 4 character").required("username required"),
	password: string().min(6, "password is minimum 6 character").required("password required")
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
