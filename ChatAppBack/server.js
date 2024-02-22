import express from "express"
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import connectMongoDB from "./db/connectMongoDB.js"

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()

app.use(express.json()) //esse treco vai pegar os request (from req.body) la no auth.controller

app.use("/api/auth", authRoutes)


// app.get("/", (req, res) => {
//     //Rota principal http://localhost:5000/
//     res.send("faz o l kkkkkkkkk")
// })

app.listen(PORT, () =>{
    connectMongoDB()
    console.log(`Server Running on http://localhost:${PORT}/`)
})