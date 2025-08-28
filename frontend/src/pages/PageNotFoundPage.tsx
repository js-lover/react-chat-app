import React from 'react'
import notFound from '../assets/animations/notFound.json'
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'

const PageNotFoundPage = () => {
  return (
    <div className='w-full h-screen  bg-black flex flex-col justify-center items-center '>

      
        <Lottie 
          className='w-full h-auto xl:w-1/2'
          animationData={notFound}
        />

        
        <Link to="/home" >
          <p className='text-white hover:cursor-pointer border-1 border-white rounded-sm p-2   hover:text-blue-500 hover:border-blue-500'>leave the page</p>
        </Link>


    </div>
  )
}

export default PageNotFoundPage