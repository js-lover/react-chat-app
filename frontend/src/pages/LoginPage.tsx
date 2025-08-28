import React, { useState } from "react";

import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import Aurora from "../assets/backgrounds/Aurora";

import { useNavigate } from "react-router-dom";
import FadeContent from "../assets/animations/reactbits/FadeContent";

import { loginUser, loginData } from "../api/auth";

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const data = await loginUser({ username, password });

      if (data.error) {
        console.log("Giriş hatalı:", data.error);
      } else {
        console.log("Giriş başarılı:", data);

        // backend sana token döndürdüyse
        if (data.token) {
          localStorage.setItem("token", data.token); // Token kaydedildi
        }

        navigate("/home");
      }
    } catch (error) {
      console.error("Sunucu hatası: ", error);
    }
  };

  return (
    <div className="w-screen h-screen relative flex flex-col justify-center items-center bg-black text-white">
      <Aurora
        amplitude={0.5}
        blend={0.5}
        colorStops={["#ff0000", "#00ff00", "#0000ff"]}
      />

      <div className="w-full h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-6">
        <FadeContent
          blur={true}
          duration={500}
          easing="ease-out"
          initialOpacity={0}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault(); // sayfanın reload olmasını engeller
              handleLogin(); // login fonksiyonunu çağır
            }}
            className="flex flex-col gap-4 w-80"
          >
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="mt-2 mb-4 w-full"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="mt-2 mb-4 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="mt-4 rounded-full cursor-pointer bg-blue-500 text-white px-6 py-2 hover:bg-blue-600"
              >
                Log In
              </button>

              <p className="mt-4 text-sm">
                Don't have an account?{" "}
                <span
                  onClick={() => navigate("/signup")}
                  className="cursor-pointer font-bold text-blue-500 hover:underline"
                >
                  Sign Up
                </span>
              </p>
            </div>
          </form>
        </FadeContent>
      </div>
    </div>
  );
};

export default LoginPage;
