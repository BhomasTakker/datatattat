import mongoose from "mongoose";

const HeaderSchema = new mongoose.Schema({
	data: String,
});

export default mongoose.models.Header || mongoose.model("Header", HeaderSchema);
