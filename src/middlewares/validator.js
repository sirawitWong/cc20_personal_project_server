import { object, ref, string, number } from "yup";

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

export const recipeSchema = object({
	name: string().required("name required"),
	description: string().notRequired(),
	category: string().required("category required"),
	instruction: string().required("instruction required"),
	image: string(),
	serving: number().transform((value) => (isNaN(value) ? undefined : value)).nullable().positive()
});

export const reviewSchema = object({
	title: string().required("title required"),
	body: string().required("review body required"),
	image: string()
});

export const ingredientSchema = object({
	name: string().required("name required"),
	image: string(),
	protein: number().transform((value) => (isNaN(value) ? undefined : value)).nullable().positive(),
	carbohydrate: number().transform((value) => (isNaN(value) ? undefined : value)).nullable().positive(),
	fat: number().transform((value) => (isNaN(value) ? undefined : value)).nullable().positive()
});

export const equipmentSchema = object({
	name: string().required("name required"),
	image: string(),
});

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
