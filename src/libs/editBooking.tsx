'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

export default async function editBooking(bookingId:string,startDate:Date,endDate:Date) {
    const session = await getServerSession(authOptions);
    const response = await fetch(`https://espresso-pratunam-rental-car.vercel.app/bookings/${bookingId}`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            authorization: `Bearer ${session?.user?.token}`
        },
        body: JSON.stringify({
            StartDate: startDate,
            EndDate: endDate
        }),
    })
    if(!response.ok){
        throw new Error("Failed to fetch hospitals")
    }

    return await response.json()
}