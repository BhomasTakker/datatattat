//I think this should just be Auth
//User would be a seperate set of data
//this is almost undeniably true

import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AuthSchema = new Schema({
	email: {
		type: String,
		required: [true, "Please provide your email."],
	},
	password: {
		type: String,
		required: [true, "Please provide a hashed password"],
	},
	userId: ObjectId,
});

export const Auth = mongoose.models.Auth || mongoose.model("Auth", AuthSchema);
