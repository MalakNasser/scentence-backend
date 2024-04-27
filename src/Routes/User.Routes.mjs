import express from "express";
import { checkUser, requireAuth } from "../Middleware/Auth.Middleware.mjs";
import { UserController } from "../Controllers/User.Controller.mjs";
import { validateEmail,validatePassword } from "../Validation/Reset.mjs";

const UserRoutes = express.Router();

UserRoutes.get('/profile', requireAuth, UserController.profile);

UserRoutes.get('/verify/:id/:uuid', UserController.verify);

// Admin
UserRoutes.get('/count', UserController.countUsers);

UserRoutes.delete('/:id',requireAuth, UserController.deleteUser);

UserRoutes.get('/',requireAuth, UserController.getUsers);

UserRoutes.get('/:id',requireAuth, UserController.getUser);

UserRoutes.post("/ResetPassword",validateEmail ,UserController.resetLink);

UserRoutes.put("/ResetPassword/:id/",validatePassword ,UserController.resetLogic);


export { UserRoutes };