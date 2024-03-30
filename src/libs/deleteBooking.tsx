'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

export default async function deleteBooking(bookingId:string) {
    const session = await getServerSession(authOptions);
    const response = await fetch(`https://espresso-pratunam-rental-car.vercel.app/bookings/${bookingId}`,{
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