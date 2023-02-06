import mongoose from "mongoose";

// this is where we ask / is a header a part of the header
// or a part of the page?
// that's a tomorrow question
//if we are managing visible number etc then it has to be a seperqate entity and part of
//headers object - I think

const Schema = mongoose.Schema;

const QuerySchema = new Schema({});
const ComponentSchema = new Schema({});
const ContainerSchema = new Schema({});

const PageSchema = new Schema({
	// header: {
	//   type: ObjectID
	// }
	//status: {} / state? private, public, published
	//creator, etc

	// userId: {
	//   type: Schema.Types.ObjectId,
	//   ref: 'User',
	//   required: true,
	// }
	/////////////////////////////////////
	//A list of components is all it is
	//Or grid of components
	//A component of components
	route: {
		type: String,
		required: true,
	},

	// A Container of Components
	container: {
		containerType: {
			type: String,
			required: true,
		},
		initData: Object, // Provide initialisation data?
		// i.e. Stack direction - horizontal
		// Props basically
	},

	components: [
		{
			componentType: {
				type: String,
				required: true,
			},
			//withQuery, withData, withPaginationQuery, string or array?
			//withRSS, withCSV, etc, etc
			//withMergedQuery - i.e. multiple sources?
			with: String,
			//If no with, you must provide data - i.e. a saved data id?
			//Surely that would just be withData?
			// data: Object,

			//would need a query if withQuery
			// query: QuerySchema,
			//queries if multiple
			// queries: [QuerySchema],
		},
	],
});

export default mongoose.models.Page || mongoose.model("Page", PageSchema);
