import mongoose, {Schema} from "mongoose";

const user = new Schema({
username : String,
useremail : String,
password : String,
number : Number
})

export default mongoose.modal("User", user);