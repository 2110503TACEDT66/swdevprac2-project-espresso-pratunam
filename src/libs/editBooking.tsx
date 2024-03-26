'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

export default async function editBooking(bookingId:string,startDate:Date,endDate:Date) {
    const session = await getServerSession(authOptions);
    const response = await fetch(`http://localhost:8000/bookings/${bookingId}`,{
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