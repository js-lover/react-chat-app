import axios from "axios";

const BASE_URL = "http://localhost:8000/api/auth";

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type" : "application/json"
    }
})

export interface registerData {
    username: string;
    name: string;
    email: string;
    password: string;
}

export interface loginData {
    username: string;
    password: string;
}

//register

export const registerUser = async (userData : registerData) => {
    try {
        

        const res = await api.post("/register", userData);
        return res.data;


    } catch (err: any) {
        return {error: err.response?.data?.message || "Sunucu hatası register :(((("};

    }
};



//login

export const loginUser = async (credentials: loginData) => {

    try {
        
        const res = await api.post("/login" , credentials);
        return res.data;

    } catch (err: any) {
        return {error: err.response?.data?.message || "Sunucu hatası login :(((("};
        
    }

};