import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@/app/generated/prisma";
import { userDetails } from "@/app/page";
import prisma from "@/db";

// const client = new PrismaClient();

export async function GET(request : NextRequest){


    const resp: userDetails[] = await prisma.user.findMany({
        omit:{
            password: true
        }
    });
    return Response.json(resp);
}

export async function POST(request : NextRequest){
    //body
    const body = await request.json();
    //headers
    // const headers = request.headers.get("authorization");
    // query params
    // const query = request.nextUrl.searchParams.get("name");
    // const params = request.nextUrl.searchParams.get("params");

    const resp: Object = await prisma.user.create({
        data:{
            username: body.username,
            password: body.password,
            email: body.email
        }
    })
    console.log(body);
    return NextResponse.json({
        resp
    })
}