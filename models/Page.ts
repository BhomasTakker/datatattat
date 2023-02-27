import mongoose from "mongoose";

// Split to folders and add types for each Schema
// We need a PageData type and this is the best place for it

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
//Each are getting saved with _ids
const ComponentSchema = new Schema(
	{
		componentType: {
			type: String,
			required: true,
		},
		// Schema these
		//Can props i.e. be schemered?
		//Potentially different for each component
		//Can you use i.e. union types in mongoose
		//that would require a schema for every component
		//every api, etc, for types sake it would be good but
		//Massive overhead for little gain
		//define overarching shapes
		componentProps: Object,
		_with: Object,
	},
	{ _id: false }
);
const ContainerSchema = new Schema(
	{
		containerType: {
			type: String,
			required: true,
		},
		initData: Object,
	},
	{ _id: false }
);

const ContentSchema = new Schema(
	{
		container: ContainerSchema,
		components: [ComponentSchema],
	},
	{ _id: false }
);

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

	creator: {
		type: Schema.Types.ObjectId,
		required: true,
	},

	header: PageHeaderSchema,
	footer: PageFooterSchema,
	content: ContentSchema,
});

export default mongoose.models.Page || mongoose.model("Page", PageSchema);
