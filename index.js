import express from "express";
import dotenv from "dotenv";
import { studentsRouter } from "./Routers/students.js";
import { mentorsRouter } from "./Routers/mentors.js";

// configure the enviornment
dotenv.config();
const PORT = process.env.PORT

const app = express();
app.use(express.json())//middleware

app.use("/students",studentsRouter)
app.use("/mentors",mentorsRouter)


// listen to server

app.listen(PORT, ()=>console.log(`Sever started in localhost:${PORT}`))