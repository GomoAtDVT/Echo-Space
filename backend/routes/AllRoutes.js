import express from "express";
import { CreateBlogController } from "../controllers/CreateBlogController.js";
import { AllBlogsController } from "../controllers/AllBlogsController.js";
import { SingleBlogController, SingleUserBlogController } from "../controllers/SingleBlogController.js";
import { LoginController } from "../controllers/LoginController.js";
import { RegisterController } from "../controllers/RegisterController.js";
import { ViewMyProfileController, ViewProfileController } from "../controllers/ViewProfileController.js";
import { DeleteBlogController } from "../controllers/DeleteBlogController.js";
import { EditBlogController } from "../controllers/EditBlogController.js";
import { EditProfileController } from "../controllers/EditProfileController.js";
import AuthenticateToken from "../middleware/AuthenticateToken.js";

export const AllRoutes = express.Router();

//Register done
AllRoutes.post("/register", RegisterController);

//login done
AllRoutes.post("/login", LoginController);

//post a blog done
AllRoutes.post("/blog", AuthenticateToken, CreateBlogController);

//get all the blogs done
AllRoutes.get("/blogs", AuthenticateToken, AllBlogsController);

//get a specific blog done
AllRoutes.get("/blogs/:id", AuthenticateToken, SingleBlogController);


AllRoutes.get("/myBlogs", AuthenticateToken, SingleUserBlogController);

//delete a blog done
AllRoutes.delete("/blog/:id", AuthenticateToken, DeleteBlogController);

//edit a blog done
AllRoutes.patch("/blogs/:id", AuthenticateToken, EditBlogController);

//Show a profile
AllRoutes.get("/profile/:id", AuthenticateToken, ViewProfileController);

AllRoutes.get("/myProfile", AuthenticateToken, ViewMyProfileController);

//edit your profile
AllRoutes.patch("/profile/:id", AuthenticateToken, EditProfileController);
