import { Router } from "express";
import authControl from "../controllers/authControl";
import passwordControl from "../controllers/passwordControl";

const router: Router = Router();

router.get("/signIn", authControl.signIn);

router.post("/generate", passwordControl.generateOwnPass);

export default router;
