import { MongoClient } from "mongodb";
import Obj from "mongodb";

// to create mongourl path from copy mongsh link
const MongoURL = "mongodb://127.0.0.1:27017/"

// to create a function for connect to db
async function createConnection(){
    //nedd to establish the client use MongoClient class
    const client = new MongoClient(MongoURL)
    await client.connect()
    console.log("mongoDB is connected sucessfully") 
    return client

}

export var ObjectId = Obj.ObjectId;
export const client = await createConnection(); 