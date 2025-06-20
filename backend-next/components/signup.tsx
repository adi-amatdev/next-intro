"use client"
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

export default function SignUp(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const router = useRouter();

    async function sendInputs(){
        console.log(typeof username, password, email);
        if(username === "" || password === "" || email === ""){
            return alert('inputs cannot be empty');
        }
        const response = await axios.post('http://localhost:3000/api/user',{
            username,
            password,
            email
        },{});
        if(response.status == 200){
            router.push('/')
        }
    }

    return (
    <div>
        <form action={sendInputs} className="flex flex-col items-center ">
            <input type="text" className="border-2 m-2 p-2" placeholder="username" onChange={(e)=>{setUsername(e.target.value)}}/>
            <input type="text" className="border-2 m-2 p-2" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" className="border-2 m-2 p-2" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button className="border-2 p-2" type="submit" > submit </button>
        </form>
    </div>
  )
}