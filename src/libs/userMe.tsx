export default async function userMe() {
    const response = await fetch("http://localhost:8000/authentication/me",{
        method: "GET",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
        }),
    })
    if(!response.ok){
        throw new Error("Failed to fetch hospitals")
    }
    return await response.json()
}