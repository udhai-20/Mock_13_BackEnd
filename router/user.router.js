const { Router } = require("express");
const { register, userAuth } = require("../Controler/user.controler");

const userRouter = Router();

userRouter.route("/signup").post(register);
userRouter.route("/login").post(userAuth);

module.exports = userRouter;
