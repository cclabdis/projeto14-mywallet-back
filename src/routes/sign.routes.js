import { Router } from "express"
import { userSchema, loginSchema} from "../schemas/schemas.js"
import {  signUp, login } from "../controllers/cadastro.controllers.js"
import { validateSchema } from "../middlewares/validateSchema.middleware.js"



const signRouter = Router()

signRouter.post("/sign-up", validateSchema(userSchema), signUp)
signRouter.post("/login", validateSchema(loginSchema), login)
// signRouter.post("/logout", authValidation, logout)


export default signRouter



