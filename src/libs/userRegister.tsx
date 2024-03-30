export default async function userRegister(name:string, userEmail:string,userPassword:string, phone:string) {
    const response = await fetch("https://espresso-pratunam-rental-car.vercel.app/authentication/register",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: userEmail,
            password: userPassword,
            phone:phone,
            role:'user'
        }),
    })
    if(!response.ok){
        throw new Error("Failed to fetch hospitals")
    }
    return await response.json()
}