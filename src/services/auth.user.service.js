import prisma from "../config/prisma.js";

export function serviceGetMe() {
	return "get me"
}

export function serviceEditUser() {
	return "edit user"
}

export function serviceGetFollower() {
	return "get all follower"
}

export function serviceGetFollowing() {
	return "get following list"
}

export function serviceFollow() {
	return "follow"
}

export function serviceUnfollow() {
	return "unfollow"
}
