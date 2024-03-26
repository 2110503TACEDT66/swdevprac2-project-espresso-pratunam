export default async function userRegister(name:string, userEmail:string,userPassword:string, phone:string) {
    const response = await fetch("http://localhost:8000/authentication/register",{
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