import React, { useEffect, useState } from 'react'

import {Header , UserCard} from '../components/index.tsx'

import { Link, useNavigate } from 'react-router-dom';

interface UserCardProps {
    id: number;
    name: string;
}



const HomePage = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState([])

  useEffect(() => {
    
    fetchData();
  
   
  }, [])

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUser(data)
      })
      .catch((err) => console.log(err)) }
  




console.log(user)



  return (

    <div className='w-screen h-screen relative flex flex-col  justify-center items-start bg-black'>

    <Header />

    <div className='w-full h-full flex flex-col justify-start items-center gap-0 mt-16'>

     
      {user.map((item: UserCardProps) => (
        
        <Link to={`/chat/${item.id}`} >
        <UserCard key={item.id} name={item.name} id={item.id}  />
        </Link>
      
      ))}
      
    
    
    </div>



    </div>




    )
}

export default HomePage;  