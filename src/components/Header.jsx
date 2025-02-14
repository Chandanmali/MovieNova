import React from 'react'
import  { useContext,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import { Appstate } from '../App';
import Song3 from '../aodio/welcome.mp3'


function Header() {
  const useAppstate = useContext(Appstate);
  function play2(){
    new Audio(Song3).play();

  }
  

  return (
    <>
      <div className='text-4xl flex justify-between items-center text-white font-bold p-3 px-6 border-b-4 border-gray-500'>
       <Link onClick={play2} to={'./'}><span>Movie<span className=' text-red-500 cursor-pointer'>Nova</span></span></Link>
       
       {useAppstate.login ?
       <Link to={'./'}><h1 className='text-sm md:text-lg md:px-12 px-5  transition duration-2000 hover:bg-blue-gray-600  rounded-xl p-2 cursor-pointer ring ring-white '>WELCOME</h1></Link>

       :
       <Link to={'./signup3'}><h1 className='text-sm md:text-lg md:px-12 px-5  transition duration-2000 hover:bg-blue-gray-800  rounded-xl p-2 cursor-pointer ring ring-white '>LOG IN</h1></Link>

       }
       

      </div>
    </>
  )
}

export default Header