import express from "express"
import { deletUser, getAllUser, getUser, newUser } from "../controllers/user.js";
import { adminOnly } from "../middlewares/auth.js";

const app=express.Router();

// Route-  /api/v1/user/new
app.post("/new",newUser);

// Route-  /api/v1/user/all
app.get("/all",adminOnly,getAllUser);

// Route-  /api/v1/user/dynamicID
app.route("/:id").get(getUser).delete(adminOnly,deletUser);
// app.get("/:_id",getUser);

export default app;