'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function createBooking(
  carId: string,
  providerId: string,
  startDate: Date,
  endDate: Date
) {
    const session = await getServerSession(authOptions);
  const response = await fetch(`http://localhost:8000/cars/${carId}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "authorization": `Bearer ${session?.user?.token}`
    },
    body: JSON.stringify({
      ProviderID: providerId,
      StartDate: startDate,
      EndDate: endDate,
    }),
  });
  if (!response.ok) {
    throw new Error("Failed to add Booking");
  }

  return await response.json();
}
