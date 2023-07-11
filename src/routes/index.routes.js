import { Router } from "express"
import signRouter from "./sign.routes.js"

const router = Router()
router.use(signRouter)
// router.use(transactionRouter)

export default router

