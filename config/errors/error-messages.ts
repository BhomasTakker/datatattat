export const ERRORS = {
	//Mongo/Mongoose
	mongoUri:
		"Please define the MONGODB_URI environment variable inside .env.local",
	//Auth
	noUser: "No user found with that email",
	invalidPassword: "Could not log you in",
	updatePassword: "Error chnaging user password.",
	createUser: "Could not create user",
};
