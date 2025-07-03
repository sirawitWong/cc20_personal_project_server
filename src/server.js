import express from "express"
import cors from "cors"
import publicRouter from "./routes/public.route.js"
import authUserRouter from "./routes/auth.user.route.js"
import authAdminRouter from "./routes/auth.admin.route.js"
import recipeRoute from "./routes/recipe.route.js"
import reviewRoute from "./routes/review.route.js"
import ingredientRoute from "./routes/ingredient.route.js"
import equipmentRoute from "./routes/equipment.route.js"
import { error } from "./utils/error.js"
import { notFound } from "./utils/not-found.js"

const app = express();
const PORT = process.env.PORT || 3033;

app.use(express.json())
app.use(cors())

app.use("/api", publicRouter)
app.use("/api", authUserRouter)
app.use("/api", authAdminRouter)
app.use("/api", recipeRoute)
app.use("/api", reviewRoute)
app.use("/api", ingredientRoute)
app.use("/api", equipmentRoute)

app.use(error)
app.use(notFound)

app.listen(PORT, () => {
	console.log(`server running at http://localhost${PORT}`)
})
