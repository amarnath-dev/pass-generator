import { Router } from "express";
import authControl from "../controllers/authControl";
import passwordControl from "../controllers/passwordControl";
import verifyUser from "../middleware/authMiddleware";

const router: Router = Router();

router.post("/signin", authControl.signIn);

router.post("/generate", verifyUser, passwordControl.generateOwnPass);

router.post("/save", verifyUser, passwordControl.savePassword);

export default router;
