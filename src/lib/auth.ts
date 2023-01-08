//This is less auth and more bcrypt lib file
//hashString to
//effectively could higher order the function
//So hashString(salt()) effectively

import { compare, hash } from "bcryptjs";

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
