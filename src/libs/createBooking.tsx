"use server";
import { authOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";

export default async function createBooking(
  carId: string,
  providerId: string,
  startDate: Date,
  endDate: Date
) {
  const session = await getServerSession(authOptions);
  const response = await fetch(`https://espresso-pratunam-rental-car.vercel.app/cars/${carId}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${session?.user?.token}`,
    },
    body: JSON.stringify({
      ProviderID: providerId,
      StartDate: startDate,
      EndDate: endDate,
    }),
  });
  if(response.status==404){
    throw new Error("You've reached maximum booking of 3");
  }
  if (!response.ok) {
    throw new Error("Failed to add Booking");
  }

  return await response.json();
}
