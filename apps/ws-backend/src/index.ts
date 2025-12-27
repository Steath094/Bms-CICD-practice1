import { WebSocketServer } from 'ws';
import dotenv from 'dotenv'
import { connectDB, User } from '@repo/db';
dotenv.config()
await connectDB();
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', async function connection(ws) {
    ws.on('error', console.error);
    console.log("User Connectect");
    await User.create({
        username: Math.random().toString(36).substring(7),
        hashedPassword: Math.random().toString(36).substring(7)
    })

    ws.send('something');
});