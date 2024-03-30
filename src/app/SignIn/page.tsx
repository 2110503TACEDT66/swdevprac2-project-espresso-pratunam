'use client';
import Login from "@/components/login";
import { signIn } from "next-auth/react";
import React  from "react";





const SignInPage = () => {
    return( 

        <Login signIn={signIn}/>
        )
}

export default SignInPage