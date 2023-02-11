import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: {
		type: String,
		// unique: [true, "Username must be unique"],
		required: [true, "Please provide your username."],
	},
	page: {
		type: Schema.Types.ObjectId,
	},
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
