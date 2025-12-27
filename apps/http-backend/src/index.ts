import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB, User } from '@repo/db';
dotenv.config()
await connectDB();
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.create({
            username,
            hashedPassword: password
        })
        res.status(201).json({ id: user._id })
    } catch (e) {
        console.log(e)
        res.status(500).json({ error: "Failed to create user" })
    }
})
app.get("/users", async (req, res) => {
    const users = await User.find()
    res.json(users)
})
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});