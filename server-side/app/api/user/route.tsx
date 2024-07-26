import { NextRequest } from "next/server";
import client from '@/db'

export async function GET() {
    const user = await client.user2.findFirst({});
    return Response.json({ name: user?.username })
}


export async function POST(req:NextRequest) {
    //extract the body
    const body = await req.json();
    // //header
    // const header = req.headers.get('authorization')
    // console.log(header)
    // //query params
    // const params = req.nextUrl.searchParams.get("name")
    //create user
    // const user = await client.user2.create({
    //     data:{
    //         username:body.username,
    //         password:body.password
    //     }
    // })
    // console.log(user.id)
    return Response.json({msg: 
        "You are Signed Up"
    })
    
}