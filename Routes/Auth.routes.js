import { Router } from "express";
import { Login, Register, getCurrentUser } from './../Controllers/Auth.Controllers.js'

const router = Router();

//api

router.post("/login", Login)
router.post("/register", Register)
router.post('/get-current-user', getCurrentUser)

export default router;




// import { Router } from "express";
// import { Login, Register } from './../Controllers/Auth.Controllers.js';

// const router=Router();

// router.use ("/Login",Login)
// router.use("/Register",Register)


// export default router;