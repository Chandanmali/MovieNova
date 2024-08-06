import { Button } from '@material-tailwind/react'
import { TextField } from '@mui/material'
import { useState } from 'react'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { auth } from '../firebase/Firebase'

function Signup2() {
       const [phone, setPhone] = useState("");
       const [user, setUser] = useState(null);
       const [otp, setOtp] = useState("");
       
       const sendOtp = async() =>{
              try{
                     const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
                     const confirmation = await signInWithPhoneNumber(auth,phone,recaptcha)
                     setUser(confirmation)
              }catch(err){
                     console.log(err)
              }

       }

       const verifyOtp = async() =>{
              try{
                  const data = await user.confirm(otp)
                  console.log(data)
              }catch(err){
                     console.error(err)
              }
              

       }


  return (
    <div className='absolute top-36 left-1/3'>
       <div className='text-center text-black'>
       <PhoneInput 
       country={'us'}
       value={phone}
       onChange={(phone)=> setPhone("+" + phone)}
       />
       <Button onClick={sendOtp} className='mt-4 bg-green-600' sx={{marginTop:"10px"}} variant='contained'>
              Send OTP
       </Button>
       <div className='mt-4' id="recaptcha"></div>
        <br />
       <TextField onChange={(e)=>setOtp(e.target.value)} sx={{marginTop:"15px", width:"300px"}} className='mt-8 bg-blue-gray-400 text-center' variant='outlined' size='small' label = "Enter Otp"/>
       <br />
       <Button onClick={verifyOtp} className='mt-4 bg-green-600' variant='contained'>Verify OTP</Button>

       </div>

      
       

    </div>
  )
}

export default Signup2