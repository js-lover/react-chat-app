import express from "express"

import {create, fetch, deleteUser, update} from "../controller/userController.js"

const route = express.Router()

route.post("/create" , create)
route.get("/getAllUsers", fetch)
route.delete("/delete/:id", deleteUser)
route.put("/update/:id" , update)

export default route