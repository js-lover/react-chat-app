import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  LoginPage,
  SignUpPage,
  PageNotFoundPage,
  LandingPage,
  HomePage,
  ChatPage,
} from "./pages/index.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute.tsx";
const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "*", element: <PageNotFoundPage /> },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/chat/:id",
    element: (
      <ProtectedRoute>
        <ChatPage />
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
