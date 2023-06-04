import mongoose from "mongoose";

const Schema = mongoose.Schema;

const InfoSchema = new Schema({
	group: {
		type: String,
		default: "component",
	},
	name: {
		type: String,
		required: [true, "You must include identifier."],
	},
	synopsis: {
		type: String,
		required: [true, "You must include a synopsis."],
	},
	description: {
		type: String,
		required: [true, "You must include a description."],
	},
	items: {
		type: Object,
	},
});

export default mongoose.models.Info || mongoose.model("Info", InfoSchema);
