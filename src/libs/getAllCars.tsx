'use server'
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

export default async function getAllCars() {
    const session = await getServerSession(authOptions);
    const response = await fetch("http://localhost:8000/cars",{
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            authorization: `Bearer ${session?.user?.token}`,
        },
    })
    if(!response.ok){
        throw new Error("Failed to fetch Cars")
    }
    return await response.json()
}