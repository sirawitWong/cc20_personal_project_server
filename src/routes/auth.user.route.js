import express from "express"
import { editUser, follow, getFollower, getFollowing, getMe, unfollow } from "../controllers/auth.user.controller.js"

const router = express.Router()

router.get("/auth/me", getMe)
router.patch("/auth/user", editUser)
router.get("/auth/user/follower", getFollower)
router.get("/auth/user/following", getFollowing)
router.patch("/auth/user/follow", follow)
router.delete("/auth/user/follow", unfollow)

export default router
