import express from "express"

import {create, fetch, deleteUser, update} from "../controller/userController.js"
import { protect } from "../middleware/authMiddleware.js"


const route = express.Router()

route.post("/create" , protect, create)
route.get("/getAllUsers",protect, fetch)
route.delete("/delete/:id",protect, deleteUser)
route.put("/update/:id" , protect, update)

export default route