import React from 'react'
import ReactStars from 'react-stars'
import { useState, useEffect } from 'react';
import { reviewsRef } from '../firebase/Firebase';
import { addDoc, query, where, getDocs, doc } from 'firebase/firestore';
import { TailSpin, ThreeDots } from 'react-loader-spinner';
import swal from 'sweetalert';
import { db } from '../firebase/Firebase';
//import Data from '../datas.json'
import { getFirestore } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const dba = getFirestore();
function Reviews({id}) {

  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState("");
  const [data, setData] = useState([]);
  const [reviewloading, setReviewloading] = useState(false);
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  
  
   
  const sendReview = async() => {
        setCheck(false) ? navigate('/signup3') :
              setLoading(true)
              

        try {
              await addDoc(reviewsRef, {
                     movieid: id,
                     name: 'Reviews',
                     rating: rating,
                     thought: form,
                     timestamp: new Date().getTime()
              });
              setRating(0);
              setForm("");
   
              swal({
                     title: "Review Sent",
                     icon: "success",
                     button: false,
                     timer: 3000
              })

                       
              
       } catch (error) {
              swal({
                     title: error.message,
                     icon: "error",
                     button: false,
                     timer: 3000
              }) 
       }
       setLoading(false);
  }

  useEffect(() => {
    async function getData()
    {
       setReviewloading(true);
       let quer = query(reviewsRef, where('movieid', '==', id))
       const querySnapshot = await getDocs(quer);

       querySnapshot.forEach((doc) => {
              setData((prev) => [...prev, doc.data()])
       })



       setReviewloading(false);

    }
  
    getData();
  }, [])
  

  return (
    <div className='mt-6 border-t-2 border-gray-700 w-full'>
       <ReactStars
          size={30}
          half={true}
          value={rating}
          onChange={(rate) => setRating(rate)}
       />

      <input 
         value={form}
         onChange={(e) => setForm(e.target.value)}
         placeholder='Share your thoughts...'
         className='w-full p-2 font-semibold rounded-sm  outline-none bg-blue-gray-800 text-white'
      
      />
      <button onClick={sendReview} id='unicode' className='text-white bg-blue-gray-800 w-full  p-2 rounded-3xl mt-2 font-bold  duration-200 flex justify-center'>
         {loading ? <TailSpin height={25} color='white'/> : 'Share'}
      </button>

      {reviewloading ? 
         <div className='mt-6 flex justify-center'><ThreeDots height={15} color='white' /></div>
         
       :
       <div className='mt-6 '>
              {data.map((e, i) =>
              {
                     return(
                            <div className='bg-blue p-2 w-full border-b border-gray-600 mt-2 rounded-xl ' key={i}>
                                   <div className='flex '>
                                        <p className='text-orange-600 text-xl'>{e.name}</p>
                                        <p className='ml-10 text-sm'>({new Date(e.timestamp).toLocaleString()})</p>

                                   </div>
                                   <ReactStars
                                       size={20}
                                       half={true}
                                       value={e.rating}
                                       edit={false}
                                   />

                                   <p>{e.thought}</p>
                            
                            </div>
                     )
              })}

       </div>

      }
       
    </div>
  )
  
}

export default Reviews