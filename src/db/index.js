import mongoose  from "mongoose";
import {DB_NAME} from "../constants.js";
const dbconnect = async () => {
    console.log("Connecting to database...");
    try{
        const connectionInstance =await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("Database connected",`${connectionInstance.connection.host}`);
    }
    catch(err){
        console.log(err);

        process.exit(1);
    }
}
export default dbconnect;