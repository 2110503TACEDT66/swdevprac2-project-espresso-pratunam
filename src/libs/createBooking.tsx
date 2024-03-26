export default async function createBooking(carId:string, providerId:string, startDate:Date, endDate:Date) {
    const response = await fetch(`http://localhost:8000/cars/${carId}/login`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ProviderID: providerId,
            StartDate: startDate,
            EndDate: endDate
        }),
    })
    if(!response.ok){
        throw new Error("Failed to add Booking")
    }

    return await response.json()
}