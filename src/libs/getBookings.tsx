"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

export default async function getBookings() {
  const session = await getServerSession(authOptions);
  const response = await fetch(
    "https://espresso-pratunam-rental-car.vercel.app/bookings",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${session?.user.token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
