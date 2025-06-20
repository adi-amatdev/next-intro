/*
    Is used to create a server action which is a replacement for the API route.
    This is used to create a user in the database.
    Similar to RPC or gRPC 
*/

"use server";
import prisma from "@/db";

type createUser = {
    response: {
        id: number;
        username: string;
        password: string;
        email: string;
    };
    status: number;
}

export async function createUser(username: string, password: string, email: string): Promise<createUser> {
    const response = await prisma.user.create({
        data: {
            username,
            password,
            email,
        },
    });
    return {
        response,
        status: 200
    };
}

export async function getUsers() {
    const response = await prisma.user.findMany({});
    return {
        response ,
        status: 200
    };
}