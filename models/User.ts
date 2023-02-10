import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		// unique: [true, "Username must be unique"],
		required: [true, "Please provide your username."],
	},
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
