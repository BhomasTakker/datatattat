//I think this should just be Auth
//User would be a seperate set of data
//this is almost undeniably true

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, "Please provide your email."],
	},
	password: {
		type: String,
		required: [true, "Please provide a hashed password"],
	},
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
