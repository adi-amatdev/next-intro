import axios from "axios";

type userDetails = {
  name: string,
  email:  string
}

async function getUserDetails(){
  await new Promise((r)=> setTimeout(r,5000));
  const response = await axios.get<userDetails>('http://localhost:3000/api/user');
  const data = response.data;
  return data;
}

export default async function Home() {
  //this would have normally required a useEffect() in react as components cannot be async for calling async functions. 
  const user = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {user?.name}
                </div>
                
                {user?.email}
            </div>
        </div>
    </div>
  );
}
