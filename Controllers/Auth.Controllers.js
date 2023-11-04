export const Login =(req,res)=>{
    res.send("Hi from login hii")
}
export const Register =(req,res)=>{
    try{
        const { name, email, passowrd} = req.body;

        return res.status(200).json({ success: true, message: "Registration Successful.." })
    }catch(error){
        return res.status(500).json({ success: false, message: error })
    }
}
export const getCurrentUser =(req,res)=>{
    res.send("HII")
}

// import UserModal from "../Modals/User.modals";
// import bcrypt from 'bcrypt';

// export const Login = (req, res) => {
//     res.send("Hi from login Hiiii")
// }

// export const Register = async (req, res) => {
//     try {
//         //console.log(req.body,"req.body")
//
//         //console.log(number, typeof number)
//         //console.log(req.body,"add data")
//         if (!name || !email || !password || !number) return res.status(401).json({ success: false, message: "All fields are mandatory" })


//         const hashedPassword = bcrypt.hash(password, 10);
//         console.log(hashedPassword, "hashedPassword")
//         // const user = new UserModal({
//         //     name: name,
//         //     email,
//         //     password,
//         //     number
//         // })
//         await user.save();
//         
//     } catch (error) {
//
//     }
// }
// export const getCurrentUser = (req, res) => {
//     res.send("HIII")
// }