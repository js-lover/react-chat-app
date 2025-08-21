import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LoginPage, SignUpPage, PageNotFoundPage, LandingPage  } from './pages/index.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

  const router = createBrowserRouter([
    {path: '/', element: <LandingPage />},
    {path: '/login', element: <LoginPage />},
    {path: '/signup', element: <SignUpPage />},
    {path: '*', element: <PageNotFoundPage />},
  ]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <RouterProvider router={router}/>
    
 </StrictMode>,
)
