import { Router } from "express";
import { Login, Register } from '../Controllers/Auth.Controllers';

const router=Router();

router.post("/login",Login)
router.post("/register",Registeregister)


export default router;