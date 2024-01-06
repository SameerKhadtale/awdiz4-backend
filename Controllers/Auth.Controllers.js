import UserModal from '../Modals/User.modals.js';
import bcrypt from 'bcrypt';
import Jwt from "jsonwebtoken";

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body.userData;
        if (!email || !password) return res.status(401).json({ success: false, message: "All fields are manmdatory.." })

        const user = await UserModal.findOne({ email: email });
        // console.log(user, "user")

        if (!user) return res.status(401).json({ success: false, message: "Email is wrong.." });

        const isPasscorrect = await bcrypt.compare(password, user.password);
        // console.log(isPasscorrect, "check here")
        if (!isPasscorrect) {
            return res.status(401).json({ success: false, message: "Password is wrong." })
        }
        // generate token

        const token = await Jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        // console.log(token, "token")

        return res.status(200).json({ success: true, message: "Login successfull.", user: { name: user.name, id: user._id }, token })

    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}
export const Register = async (req, res) => {
    try {
        // console.log(req.body, "req.body")
        const { name, email, password } = req.body.userData;
        // console.log(number, typeof number)
        // console.log(name, email, password, "add data")
        if (!name || !email || !password) return res.status(401).json({ success: false, message: "All fields are mandtory." })

        const hashedPassword = await bcrypt.hash(password, 10);
        // console.log(hashedPassword,"hashedPassword")
        const user = new UserModal({
            name: name,
            email,
            password: hashedPassword
        })

        await user.save();

        return res.status(200).json({ success: true, message: "Registeration Successfull." })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: error })
    }
}
export const getCurrentUser = async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) return res.status(401).json({ success: false, message: "Token is requored." })

        const { id } = await Jwt.verify(token, process.env.JWT_SECRET)
        // console.log(id, 'id')

        const user = await UserModal.findById(id);
        if (!user) return res.status(401).json({ success: false, message: "User not found." })

        return res.status(200).json({ success: true, user: { name: user.name, id: user._id } })

    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}




// // export const Login =(req,res)=>{//     res.send("Hi from login hii")// }// export const Register =(req,res)=>{// try{// console.log(req.body, "req.body") // console.log(req.body, "req.body")// import UserModals from "../Modals/User.modals"//}catch(error){//}// }// export const getCurrentUser =(req,res)=>{//res.send("HII")// }

// import UserModal from "./Modals/User.modals.js";
// export const Login = (req, res) => {
//     res.send("Hi from login Hiiii")
// }

// export const Register = (req, res) => {
//     res.send("Hi from register")
// }

// export const getCurrentUser = (req, res) => {
//     res.send("HIII")
// }

// // export const Register = async (req, res) => {
// //     try {
// //         const { name, email, password } = req.body;
// //         if (!name || !email || !password || !number) return res.status(401).json
// //         ({ success: false, message: "All fields are mandatory" })
// //         const user = new UserModal({
// //             name, email, password})
// //             await user.save();
    
// //         return res.status(200).json({ success: true, message: "Registration Successful.." })
        
// //     } catch (error) {
// //         return res.status(500).json({ success: false, message: error })
// //     }
// // }








// console.log(name, email, password,"add data")
//console.log(req.body,"req.body") //console.log(number, typeof number)//console.log(req.body,"add data")
// console.log(req.body, "req.body")
// import bcrypt from 'bcrypt';
// const hashedPassword = bcrypt.hash(password, 10);// console.log(hashedPassword, "hashedPassword")// await user.save();
