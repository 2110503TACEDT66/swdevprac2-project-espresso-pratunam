"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

export default async function getBookings() {
  const session = await getServerSession(authOptions);
  const response = await fetch("http://localhost:8000/bookings", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${session?.user?.token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch Bookings");
  }
  return await response.json();
}
