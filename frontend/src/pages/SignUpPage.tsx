import React, { useState } from "react";

import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import Aurora from "../assets/backgrounds/Aurora";

import { useNavigate } from "react-router-dom";
import FadeContent from "../assets/animations/reactbits/FadeContent";

import { registerUser, registerData } from "../api/auth";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      // Kullanıcı bilgilerini backend'e gönder
      const data = await registerUser({ name, username, email, password });

      if (data.error) {
        console.log("Kayıt hatası:", data.error);
        // istersen state ile kullanıcıya mesaj gösterebilirsin
      } else {
        console.log("Kayıt başarılı:", data);
        // Başarılıysa yönlendirme
        navigate("/login");
      }
    } catch (err) {
      console.error("Sunucu hatası:", err);
    }
  };

  return (
    <div className="w-screen h-screen relative flex flex-col justify-center items-center bg-black text-white">
      <Aurora
        amplitude={0.5}
        blend={0.5}
        colorStops={["#ff0000", "#00ff00", "#0000ff"]}
      />

      <div className="w-full h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-0">
        <FadeContent
          blur={true}
          duration={500}
          easing="ease-out"
          initialOpacity={0}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault(); // sayfanın reload olmasını engeller
              handleRegister(); // register fonksiyonunu çağır
            }}
            className="flex flex-col gap-4"
          >
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="mt-2 mb-4 w-80"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="mt-2 mb-4 w-80"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-2 mb-4 w-80"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="mt-2 mb-4 w-80"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="mt-4 rounded-full cursor-pointer bg-blue-500 text-white px-6 py-2 hover:bg-blue-600"
              >
                Register
              </button>

              <p className="mt-4 text-sm">
                You already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="cursor-pointer font-bold text-blue-500 hover:underline"
                >
                  Log In
                </span>
              </p>
            </div>
          </form>
        </FadeContent>
      </div>
    </div>
  );
};

export default SignUpPage;
