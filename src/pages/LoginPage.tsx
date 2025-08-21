import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Aurora from "@/assets/backgrounds/Aurora";

import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate();
  return (
    
    <div className="w-screen h-screen relative flex flex-col justify-center items-center bg-black text-white ">
         
        <Aurora
                    amplitude={0.5}
                    blend={0.5}
                    colorStops={["#ff0000", "#00ff00", "#0000ff"]}
                />


<div className="w-full h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-6">
        
            <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" className="mt-2 mb-4 w-80" />
            </div>

            <div>
                <div className="flex justify-between items-center">
                    <Label htmlFor="password">Password</Label>
                <Label onClick={() => navigate('/')} className="cursor-pointer font-bold text-sm" >Forgot your password?</Label>
                </div>
                <Input id="password" type="password" placeholder="Enter your password" className="mt-2 mb-4 w-80" />
            </div>
        

        <div className="flex flex-col items-center">
            <button className="mt-4 rounded-full cursor-pointer bg-blue-500 text-white px-6 py-2 hover:bg-blue-600">
                Log In
            </button>
            <p className="mt-4 text-sm">
                Don't have an account?{" "}
                <span onClick={() => navigate('/signup')} className="cursor-pointer font-bold text-blue-500 hover:underline">
                    Sign Up
                </span>
            </p>
            
        </div>
</div>

    </div>


  );
};

export default LoginPage;
