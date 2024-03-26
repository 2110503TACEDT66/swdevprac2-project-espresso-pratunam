export default async function getAllCars() {
    const response = await fetch("http://localhost:8000/cars",{
        method: "GET",
        headers:{
            "Content-Type": "application/json",
        },
    })
    if(!response.ok){
        throw new Error("Failed to fetch Cars")
    }
    return await response.json()
}