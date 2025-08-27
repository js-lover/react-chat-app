import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

//JWT token otomatik eklemek için instance ekledik
const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//API FONKSIYONLARI

export const getAllUsers = async () => {
  try {
    const response = await api.get("/user/getAllUsers");
    return response.data;
  } catch (error) {
    console.error("Kullanıcı profili çekme hatası: ", error);
    throw error;
  }
};

export const getUserProfileById = async (userId: string) => {
  try {
    const response = await api.get(`/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Kullanıcı profilini çekme hatası:", error);
    throw error;
  }
};

export const deleteUser = async (userId: string) => {
  try {
    const response = await api.delete(`api/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Kullanıcı silme hatası:", error);
    throw error;
  }
};

export const createUser = async (newUserData: {
  newUsername: string;
  newName: string;
  newUserEmail: string;
  newUserPassword: string;
}) => {
  try {
    const requestData = {
      username: newUserData.newUsername,
      name: newUserData.newName,
      email: newUserData.newUserEmail,
      password: newUserData.newUserPassword,
    };

    const response = await api.post("/user/create", requestData);

    return response.data;

   

  } catch (error) {
    console.error("Kullanıcı oluşturulamadı", error);
    throw error;
  }
};
