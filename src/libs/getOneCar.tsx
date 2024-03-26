export default async function getOneCar(cardId:string) {
    const response = await fetch(`http://localhost:8000/cars/${cardId}`,{
        method: "GET",
        headers:{
            "Content-Type": "application/json",
        },
    })
    if(!response.ok){
        throw new Error("Failed to fetch Car")
    }
    return await response.json()
}