import React from 'react'
import notFound from '../assets/animations/notFound.json'
import Lottie from 'lottie-react'

const PageNotFoundPage = () => {
  return (
    <div className='w-full h-screen bg-black flex flex-col justify-center items-center '>

      
        <Lottie 
          className='w-full h-auto'
          animationData={notFound}
        />

        <h2 className='text-white font-light'>We can't seem to find the page you looking for...</h2>
        <h3 className='text-white font-light text-sm'>go back</h3>


    </div>
  )
}

export default PageNotFoundPage