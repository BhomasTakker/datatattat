import mongoose, { ObjectId, Schema, model } from "mongoose";

// const Schema = mongoose.Schema;

export interface IUser {
	username: string;
	role: string;
	_id: ObjectId;
}

const UserSchema = new Schema<IUser>({
	username: {
		type: String,
		// unique: [true, "Username must be unique"],
		required: [true, "Please provide your username."],
	},

	role: {
		type: String,
		default: "standard",
	},

	//page is no longer required
	// page: {
	// 	type: Schema.Types.ObjectId,
	// },
});

export const User = mongoose.models.User || model("User", UserSchema);
