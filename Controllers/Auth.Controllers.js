// export const Login =(req,res)=>{//     res.send("Hi from login hii")// }// export const Register =(req,res)=>{// try{// console.log(req.body, "req.body") // console.log(req.body, "req.body")// import UserModals from "../Modals/User.modals"//}catch(error){//}// }// export const getCurrentUser =(req,res)=>{//res.send("HII")// }

import UserModal from "./Modals/User.modals.js";
export const Login = (req, res) => {
    res.send("Hi from login Hiiii")
}

export const Register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password || !number) return res.status(401).json
        ({ success: false, message: "All fields are mandatory" })
        const user = new UserModal({
            name, email, password})
            await user.save();
    
        return res.status(200).json({ success: true, message: "Registration Successful.." })
        
    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}
export const getCurrentUser = (req, res) => {
    res.send("HIII")
}
// console.log(name, email, password,"add data")
//console.log(req.body,"req.body") //console.log(number, typeof number)//console.log(req.body,"add data")
// console.log(req.body, "req.body")
// import bcrypt from 'bcrypt';
// const hashedPassword = bcrypt.hash(password, 10);// console.log(hashedPassword, "hashedPassword")// await user.save();
