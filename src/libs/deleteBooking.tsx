'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

export default async function deleteBooking(bookingId:string) {
    const session = await getServerSession(authOptions);
    const response = await fetch(`http://localhost:8000/bookings/${bookingId}`,{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            authorization: `Bearer ${session?.user?.token}`
        },
    })
    if(!response.ok){
        throw new Error("Failed to fetch hospitals")
    }

    return await response.json()
}