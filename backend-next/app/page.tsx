import axios from "axios";
// import { PrismaClient } from "./generated/prisma";

import prisma from "@/db";
import { getUsers } from "@/actions/user";

export type userDetails = {
  username: string,
  email:  string
}

async function getPrismUserDetails(){
  //renders only jsx, no api call sent to backend
  //only works for server component
 try {
    // const prisma = new PrismaClient();
    const resp: userDetails[] = await prisma.user.findMany({
          omit:{
              password: true
          }
    });
    await prisma.$disconnect();
    return resp;

 } catch (error) {
    console.log(error);
 }

}

async function getUserDetails(){
  // used for frontend logic, mainly `use client` is needed for onClick, state-management
  const response = await axios.get<userDetails[]>('http://localhost:3000/api/user');
  const data = response.data;
  return data;
}

export default async function Home() {
  /*
    this would have normally required a useEffect() in react as components cannot
    be async for calling async functions. 
    only ssr components can be async
  */
  const result = await getUsers(); // getPrismUserDetails(); // getUserDetails()
  const users: userDetails[] | undefined = result?.response; //server action
  
  if(!users){
    return (
      <div>
          could not load users
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center h-screen">
        {users.map((user:userDetails)=>(
          <div key={user.username} className="flex justify-center">
            <div className="border p-8 m-2 rounded">
                <div>
                    Name: {user?.username}
                </div> 
                {user?.email}
            </div>
        </div>
        ))}
    </div>
  );
}
