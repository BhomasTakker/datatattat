import mongoose from "mongoose";

// this is where we ask / is a header a part of the header
// or a part of the page?
// that's a tomorrow question
//if we are managing visible number etc then it has to be a seperqate entity and part of
//headers object - I think

const Schema = mongoose.Schema;

const PageHeaderSchema = new Schema({
	id: {
		type: Schema.Types.ObjectId,
		ref: "Header",
		required: true,
	},
	active: Schema.Types.String,
	visible: Boolean,
});
const PageFooterSchema = new Schema({
	id: {
		type: Schema.Types.ObjectId,
		ref: "Footer",
		required: true,
	},
	visible: Boolean,
});

const QuerySchema = new Schema({});
const ComponentSchema = new Schema({
	componentType: {
		type: String,
		required: true,
	},
	with: String,
});
const ContainerSchema = new Schema({
	containerType: {
		type: String,
		required: true,
	},
	initData: Object,
});

const ContentSchema = new Schema({
	container: ContainerSchema,
	components: [ComponentSchema],
});

const PageSchema = new Schema({
	//status: {} / state? private, public, published
	//creator, etc

	// userId: {
	//   type: Schema.Types.ObjectId,
	//   ref: 'User',
	//   required: true,
	// }
	route: {
		type: String,
		required: true,
	},

	header: PageHeaderSchema,
	footer: PageFooterSchema,
	content: ContentSchema,
});

export default mongoose.models.Page || mongoose.model("Page", PageSchema);
