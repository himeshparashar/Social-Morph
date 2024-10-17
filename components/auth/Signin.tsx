
"use client"
import React, { useState } from "react";

import axios from "axios";
import Heading from "@/components/ui/Heading";
import SubHeading from "@/components/ui/SubHeading";
import InputBox from "@/components/ui/InputBox";
import ButtonWarning from "@/components/ui/ButtonWarning";
import { useRouter } from "next/navigation";

const Signin = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''

    });
    const router = useRouter();
    const handleChange = (e: any) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })

    }

    const handleSignIn = async () => {
        try {
            const response = await axios.post(
                //actual route add
                "http://localhost:3000/api/v1/user/login",
                {
                    formData
                }
            );
            //actual validation do
            localStorage.setItem("token", response.data.token);
            router.push("/dashboard");
        } catch (error) {
            console.log("error sigining in :", error);
        }
    };
    return (
        <div className="w-full h-screen bg-[url('https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover flex items-center justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign In"} />
                    <SubHeading label={"Enter your credentials to access your account"} />
                    <InputBox
                        onChange={handleChange}
                        placeholder="abc@gmail.com"
                        label={"Email"}
                    />
                    <InputBox
                        onChange={handleChange}
                        placeholder="123455"
                        label={"Password"}
                        type="password"
                    />
                    <div className="pt-4">
                        <button onClick={handleSignIn} className="bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded mt-4" type="submit">Submit</button>
                    </div>
                    <ButtonWarning
                        label={"Don't have an account?"}
                        buttonText={"Sign Up"}
                        to={"/sign-up"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Signin;