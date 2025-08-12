import express from "express";
import { CreateBlogController } from "../controllers/CreateBlogController.js";
import { AllBlogsController } from "../controllers/AllBlogsController.js";
import { SingleBlogController } from "../controllers/SingleBlogController.js";
import { LoginController } from "../controllers/LoginController.js";
import { RegisterController } from "../controllers/RegisterController.js";
import { ViewProfileController } from "../controllers/ViewProfileController.js";
import { DeleteBlogController } from "../controllers/DeleteBlogController.js";
import { EditBlogController } from "../controllers/EditBlogController.js";
import { EditProfileController } from "../controllers/EditProfileController.js";

export const AllRoutes = express.Router();

//post a blog done
AllRoutes.post("/blog", CreateBlogController);

//get all the blogs done
AllRoutes.get("/blogs", AllBlogsController);

//get a specific blog done
AllRoutes.get("/blogs/:id", SingleBlogController);

//delete a blog done
AllRoutes.delete("/blog/:id", DeleteBlogController);

//edit a blog done
AllRoutes.patch("/blogs/:id", EditBlogController);

//Register done
AllRoutes.post("/register", RegisterController);

//login done
AllRoutes.post("/login", LoginController);

//Show a profile
AllRoutes.get("/profile/:id", ViewProfileController);

//edit your profile
AllRoutes.patch("/profile/:id", EditProfileController);
