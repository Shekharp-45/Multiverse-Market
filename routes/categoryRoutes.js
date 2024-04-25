import express  from "express";
import {  requireSignIn ,isAdmin } from "../middlewares/authMiddleware.js";
import { categoryController, createCategorycontroller, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/categoryController.js";
const router=express.Router();

//routes
//create category
router.post('/create-category',requireSignIn,isAdmin,createCategorycontroller);

//update category
router.put("/update-category/:id",requireSignIn,isAdmin,updateCategoryController);

//get all category uer login ny tri category show krav lagn na so dont use middlewares
router.get("/get-category",categoryController);

//single category
router.get("/single-category/:slug",singleCategoryController);

//delete category
router.delete("/delete-category/:id",requireSignIn,isAdmin,deleteCategoryController);

export default router;