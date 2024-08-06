import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import {auth} from '../firebase/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import swal from "sweetalert";
import Login from './Login';
import {ThreeCircles} from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


function Signup3() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);
       useEffect(() => {
              async function getData() {
               
                let change = setTimeout(function()
                {
                  setLoading(false);
                }, 500)
                 
              }
              getData();
            },[loading])

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      createUserWithEmailAndPassword(auth, email, password)
      console.log("Account Created");
      if(password.length >= 6)
      {
        swal({
          title: "Accout Created Successfully",
          icon: "success",
          buttons: false,
          timer: 4000
        });
        
        toast.success("Accout Created Successfully🎉")
        navigate('/login');

      }
      else{
        swal({
          title: "Use atleast 6 words for Password",
          icon: "error",
          buttons: false,
          timer: 4000
        })
        toast.success("Use Atleast 6 Letters in PassWord📌")

      }
      

    }
    catch(err){
      console.log(err);
      toast.success(`${err}`)
    }
    
    
  }
  return (
       
    <div className='flex justify-center items-center h-96 bg-blue-400'>
       {loading ? <div className='h-96 flex w-full justify-center items-center' ><ThreeCircles height={80} color='white'  /></div> :

      <form className='bg-slate-300 p-10 rounded-sm text-center' onSubmit={handleSubmit}>
        <h2 className='mb-5 font-bold text-3xl mt-40'>Sign Up</h2>
        <p className='mb-11 text-xl mt-2'>(Please Enter your details)</p>
        <div>
        <label htmlFor="email" className='inline-table font-bold justify-center text-xl rounded-lg w-48 '>
          <span className='flex float-start '>Email:-ID</span>
          <br />
          <div className=' flex float-start mt-2 '>
              <br />
          <input className='md:w-96 rounded-lg p-2  text-white bg-blue-gray-900 ring ring-white' type="text " onChange={(e) => setEmail(e.target.value)}/>
          </div>
        </label>
        </div>
        

        <div className='mt-8'>
        <label className=' inline-table font-bold text-xl rounded-lg md:w-72 w-48' htmlFor="password">
              <span className='flex float-start mb-2 '>Password:</span>
          
          <div className=' mt-8'>
          <input className='md:w-96 rounded-lg p-2 text-white bg-blue-gray-900 ring ring-white' type="password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          
        </label>

        </div>
        
        <div className='mt-12 flex justify-center md:w-96 w-72 rounded-xl cursor-pointer ring ring-white text-black  bg-white'>
        <button className='text-center p-2 md:w-60  font-bold text-lg flex justify-center' type='submit'>Sign Up</button><ToastContainer/>
        </div>
        <br />
        <p className='mt-3 text-lg'>Already Registered? <span className='text-orange-800 font-bold'><Link to='/login'>Login</Link></span></p>
      </form>
} 
    </div>
  )
}

export default Signup3