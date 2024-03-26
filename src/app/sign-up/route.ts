import { connectToMongo } from "@/dbconfig/dbconfig";
import UserModel from "@/model/userModel";
import { Caramel } from "next/font/google";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

  try {
    const reqBody = await request.json();
    const { name, email, phone, password } = reqBody;
    try {
      const user = await UserModel.create({
        name,
        email,
        password,
        phone,
      });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      message: "User created",
      success: true,
    });
  } catch (error: any) {
    console.log(error.response);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
