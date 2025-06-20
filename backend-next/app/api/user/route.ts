import { NextRequest } from "next/server";
import { PrismaClient } from "../../generated/prisma";

const client = new PrismaClient();

export function GET(request : NextRequest){
    return Response.json({
        name: "aaditya",
        email:"aaditya@acharya.com"
    })
}

export async function POST(request : NextRequest){

    const body = await request.json();

    const resp: Object = await client.user.create({
        data:{
            username: body.username,
            password: body.password,
            email: body.email
        }
    })
    console.log(body);
    return Response.json({
        resp
    })
}