import { Router } from "express";
import { Login, Register } from './../Controllers/Auth.Controllers.js';

const router=Router();

router.use ("/Login",Login)
router.use("/Register",Register)


export default router;