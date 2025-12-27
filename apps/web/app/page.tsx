"use client"
import { useState } from "react";

export default function Home() {
  const [users,setUsers] = useState([])
  fetch("http://localhost:3001/users").then(res => res.json()).then(data => setUsers(data))

  return (
    <div>
      {users.map((user: any) => (
        <div key={user._id}>
          <h1>{user.username}</h1>
          <h1>{user.hashedPassword}</h1>
        </div>
      ))}
    </div>
  );
}
