import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

export async function GET() {
    const user = await client.user2.findFirst({});
    return Response.json({ name: user?.username })
}


export async function POST(req:NextRequest) {
    //extract the body
    const body = await req.json();
    //create user
    const user = await client.user2.create({
        data:{
            username:body.username,
            password:body.password
        }
    })
    console.log(user.id)
    return Response.json({msg: 
        "You are Signed Up"
    })
    
}