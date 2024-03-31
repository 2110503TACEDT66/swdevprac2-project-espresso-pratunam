"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

export default async function getOneCar(cardId: string) {
  const session = await getServerSession(authOptions);
  const response = await fetch(
    `https://espresso-pratunam-rental-car.vercel.app/cars/${cardId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${session?.user?.token}`,
      },
    }
  );
  if (!response.ok) {
    console.log(`Errorsasds : ${response.body}`);
    throw new Error("Failed to fetch Car\n" + response.statusText);
  }
  return await response.json();
}
