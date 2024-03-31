export default async function userMe() {
  const response = await fetch(
    "https://espresso-pratunam-rental-car.vercel.app/authentication/me",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch user\n" + response.statusText);
  }
  return await response.json();
}
