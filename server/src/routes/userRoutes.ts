import { Router } from "express";
import authControl from "../controllers/authControl";
import passwordControl from "../controllers/passwordControl";
import verifyUser from "../middleware/authMiddleware";

const router: Router = Router();

router.post("/signin", authControl.signIn);

router.post("/signup", authControl.signUp)

router.post("/signInWithEmailPassword", authControl.signInWithEmailPassword);

router.post("/signUpWithEmailPassword", authControl.signUpWithEmailPassword);

router.post("/generate", verifyUser, passwordControl.generateOwnPass);

router.post("/save", verifyUser, passwordControl.savePassword);

router.get("/passwords", verifyUser, passwordControl.getPasswords);

router.delete("/delete/:id", verifyUser, passwordControl.deletePassword);

export default router;
