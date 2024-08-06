import React from 'react'
import  { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import { Appstate } from '../App';

function Welcome() {
  const useAppstate = useContext(Appstate);

  return (
    <>
      <div className='text-4xl flex justify-between items-center text-white font-bold p-3 px-6 border-b-4 border-gray-500'>
      
       <Link to={'./welcome'}><h1 className='text-sm md:text-lg md:px-12 px-5  transition duration-2000 hover:bg-slate-600  rounded-xl p-2 cursor-pointer ring ring-white '>WELCOME</h1></Link>

      </div>
    </>
  )
}

export default Welcome