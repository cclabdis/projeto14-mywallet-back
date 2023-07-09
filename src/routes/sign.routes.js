import { Router } from "express"
import { userSchema} from "../schemas/schemas.js"
import {  signUp } from "../controllers/cadastro.controllers.js"
import { validateSchema } from "../middlewares/validateSchema.middleware.js"



const signRouter = Router()

signRouter.post("/sign-up", validateSchema(userSchema), signUp)


export default signRouter