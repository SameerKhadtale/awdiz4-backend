import mongoose, { Schema } from "mongoose";

const user = new Schema({
    name: {
        type: String
    },
    email: String,
    password: String,
    cart: [String],
    number: Number
})

export default mongoose.model("User", user);




// import mongoose, {Schema} from "mongoose";

// const user = new Schema({
// username : String,
// useremail : String,
// password : String,
// number : Number,
// })

// export default mongoose.model("Users", user);