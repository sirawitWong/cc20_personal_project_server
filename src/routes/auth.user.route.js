import express from "express"
import {
	getMe,
	editUser,
	//follow,
	//getFollower,
	//getFollowing,
	//unfollow 
} from "../controllers/auth.user.controller.js"
import { authCheck } from "../middlewares/authen.middleware.js"

const router = express.Router()

router.get("/auth/me", authCheck, getMe)
router.patch("/auth/user", authCheck, editUser)
//router.get("/auth/user/follower", authCheck, getFollower)
//router.get("/auth/user/following", authCheck, getFollowing)
//router.patch("/auth/user/follow", authCheck, follow)
//router.delete("/auth/user/follow", authCheck, unfollow)

export default router
