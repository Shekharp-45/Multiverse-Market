import express  from "express";
import {registerController, 
    loginController,
    testController,
    forgotPasswordController,
    updateProfileController
} from "../controllers/authController.js" 
import {  requireSignIn ,isAdmin } from "../middlewares/authMiddleware.js";

//router obj
const router=express.Router()

//routing
//register || Method POST
router.post( "/register",registerController)

//LOGIN || POST
router.post( "/login",loginController)

//Forgot Password || POST method
router.post('/forgot-password',forgotPasswordController);

//test route
router.get("/test",requireSignIn , testController)

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);


export default router;