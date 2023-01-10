//Redundant now with mongoose

//rename to mongo / and or add to mongo lib folder

import { MongoClient } from "mongodb";

export async function connectToDatabase() {
	const client = await MongoClient.connect(
		//pass vars in
		`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.e0omfqn.mongodb.net/${process.env.AUTH_DATABASE}?retryWrites=true&w=majority`
		// ''+process.env.MONGO_CONNECTION_STRING
	);
	//Error handling and logging

	return client;
}
