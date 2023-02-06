import mongoose from "mongoose";

const FooterSchema = new mongoose.Schema({
	data: String,
});

export default mongoose.models.Footer || mongoose.model("Footer", FooterSchema);
