import { Router } from "express";
import { Login } from './../Controllers/Auth.Controllers.js';

const router=Router();

router.post("/login",Login)
// router.post("/register",Register)


export default router;