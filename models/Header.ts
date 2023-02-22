import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NavItemSchema = new Schema(
	{
		label: {
			type: String,
			required: true,
		},
		route: {
			type: String,
			required: true,
		},
		parent: {
			type: Schema.Types.ObjectId,
			ref: "Header",
		},
	},
	{ _id: false }
);

const HeaderSchema = new Schema({
	nav: [NavItemSchema],
});

export default mongoose.models.Header || mongoose.model("Header", HeaderSchema);
