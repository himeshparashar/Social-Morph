"use client"
import { useState } from "react";
import axios from "axios";
import Heading from "../ui/Heading";
import SubHeading from "../ui/SubHeading";
import ButtonWarning from "../ui/ButtonWarning";
import InputBox from "../ui/InputBox";

const Signup = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''

    });

    //Keep everything we already have in the form, but update the field the user is typing in with the new value
    const handleChange = (e: any) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })

    }
    const handleNextStep = () => {
        setStep(step + 1);
    }
    const handlePrevStep = () => {
        setStep(step - 1)
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(formData)

        try {
            //add actual route
            await axios.post("http://localhost:3000/api/v1/register", {
                formData
            })

        } catch (err) {
            console.log("error in Signup", err)
        }
    };



    return (<div className="w-full h-screen  py-12 flex items-center justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                {step === 1 && (
                    <div>
                        <Heading label="Sign Up" />
                        <SubHeading label="Tell us about yourself! What do you do? Let’s tailor your experience so it best suits you." />
                        <div className="border border-gray-300 rounded-lg p-2 mb-2 flex items-center cursor-pointer">
                            <label className="flex items-center w-full">
                                <input type="radio" name="userType" value="business" onChange={handleChange} />
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold text-left pl-6">I own a business</h3>
                                    <p className="text-gray-500 text-left pl-6">Setting up my account for my company.</p>
                                </div>
                            </label>


                        </div>
                        <div className="border border-gray-300 rounded-lg p-4 mb-6 flex items-center cursor-pointer">
                            <label className="flex items-center w-full">
                                <input type="radio" name="userType" value="student" onChange={handleChange} className="mr-4" />
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold text-left pl-2">I'm a student</h3>
                                    <p className="text-gray-500 text-left pl-2">Looking to learn about the tool.</p>
                                </div>
                            </label>
                        </div>

                        {/* <button className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 rounded" onClick={handleNextStep}>Next</button> */}
                        <button className="bg-gradient-to-r from-purple-400 to-purple-900  text-white px-6 py-2 rounded" onClick={handleNextStep}>Next</button>
                        <ButtonWarning label="Already have an account" buttonText="Sign In" to="/sign-in" />
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <Heading label="Sign Up" />
                        <SubHeading label="Enter your Information to create an account" />
                        <InputBox label="Username" placeholder="username" onChange={handleChange} />
                        <InputBox label="Password" placeholder="password" onChange={handleChange} type="password" />
                        <button onClick={handlePrevStep} className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded mr-4 mt-4">Previous</button>
                        {/* <button className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 rounded mt-4" onClick={handleNextStep}>Next</button> */}
                        <button className="bg-gradient-to-r from-purple-400 to-purple-900 text-white px-6 py-2 rounded mt-4" onClick={handleNextStep}>Next</button>
                        <ButtonWarning label="Already have an account" buttonText="Sign In" to="/sign-in" />

                    </div>
                )
                }
                {step === 3 && (
                    <form onSubmit={handleSubmit}>
                        <div className="pb-4">
                            <Heading label="Sign Up" />
                            <SubHeading label="Enter your Email for Verification" />
                            <InputBox type="email" label="Email" placeholder="your e-mail" onChange={handleChange} />
                            <InputBox label="Enter Otp" placeholder="your otp" onChange={handleChange} />

                            <button onClick={handlePrevStep} className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded mr-4 mt-4">Previous</button>
                            {/* <button className="bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded mt-4" type="submit">Submit</button> */}
                            <button className="bg-gradient-to-r from-purple-400 to-purple-900 text-white px-4 py-2 rounded mt-4" type="submit">Submit</button>
                            <ButtonWarning label="Already have an account" buttonText="Sign In" to="/sign-in" />
                        </div>
                    </form>
                )}
            </div>
        </div>
    </div>
    )
}

export default Signup;