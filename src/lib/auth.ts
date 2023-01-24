//This is less auth and more bcrypt lib file
//hashString to
//effectively could higher order the function
//So hashString(salt()) effectively

import { compare, hash } from "bcryptjs";
import { signOut } from "next-auth/react";
import { addNotification } from "@/store/notifications/notificationSlice";
import store from "@/store/store";
import { NOTIFICATIONS } from "./notifications/notifications";

export async function hashPassword(password: string): Promise<string> {
	const hashedPassword = await hash(password, 12);
	return hashedPassword;
}

//is there a better type ?
//12 salt string might be pushing it
export async function verifyPassword(
	password: string,
	hashedPassword: string
): Promise<boolean> {
	const isValid = await compare(password, hashedPassword);
	return isValid;
}

type Callback = () => void;

export async function login() {}
export async function logout(callback: Callback) {
	//Should probably wrap in an async function
	//then this is just a function
	//We do or may want to call callback regardless of outcome
	const response = await signOut({
		redirect: false,
	});

	store.dispatch(addNotification(NOTIFICATIONS.userLoggedOut));

	if (callback) callback();
}
