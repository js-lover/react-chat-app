import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import route from "./routes/userRoute.js";
import authRoutes from './routes/authRoutes.js'
import cors from "cors";
import {Server} from "socket.io"
import http from "http"




const app = express();


const server = http.createServer(app)
const io = new Server(server, {
  cors: {
     origin: "http://localhost:5173",
     methods: ["GET" , "POST"]
  }
});


io.on("connection", (socket) => {



  console.log("Kullanıcı bağlandı:", socket.id);

socket.on("join_room", (roomId) => {
    socket.join(roomId);
    console.log(`Kullanıcı ${socket.id} ${roomId} odasına katıldı`);
  });


  socket.on("send_message", (data) => {
    io.to(data.roomId).emit("receive_message", {
      message: data.message,
      roomId: data.roomId,
      senderId : socket.id
    })
  });
});




app.use(bodyParser.json());

app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("db connection is successful...");
    server.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api/user", route);
app.use("/api/auth", authRoutes);