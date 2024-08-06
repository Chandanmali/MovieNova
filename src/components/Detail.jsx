import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ReactStars from 'react-stars'
import {ThreeCircles} from 'react-loader-spinner'
//import Datas from '../datas.json'
import Reviews from './Reviews';
//import Datasp from '../datas.json'



function Detail({name, post, Rating,id}) {

  const {val} = useParams();
  const [data, setData] = useState({
    name: "",
    post: "",
    Rating: "",
    description: "",
    
  });

  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
     // setLoading(false);
      //  const _doc = doc(name, post, Rating);
      //  const _data = await getDoc(_doc);
      // setData(_data.data());
      //setLoading(true);
      let change = setTimeout(function()
      {
        setLoading(false);
      }, 500)
       
    }
    getData();
  },[loading])
   
  
  return (
    <div className='p-4 mt-4 flex flex-col md:flex-row items-center md:items-start w-full justify-center'>
      { loading ? <div className='h-96 flex w-full justify-center items-center' ><ThreeCircles height={80} color='white'  /></div> :
        <>
       <img className='h-96 block md:sticky top-24 rounded-lg bg-gray-100 shadow-lg object-cover mb-5' src={post} alt="Loading" />
       <div className='md:ml-4 ml-8 flex-wrap w-full md:w-1/2'>
       <h1 className='text-3xl font-bold text-gray-400'>{name} <span>(2023)</span></h1>

       <ReactStars 
              size={27}
              half={true}
              value={Rating}
              edit={false} 
       />

       <p className='mt-3 flex-wrap'>The story centers around main character, who brief description of the central plot or conflict. As the plot unfolds, mention key events or turning points, avoiding major spoilers, leading the characters on a journey through describe the setting or context. Throughout their journey, they face briefly describe challenges or conflicts, ultimately reaching hint at the resolution or climax without giving it away. they face briefly describe challenges or conflicts, ultimately reaching hint at the resolution or climax without giving it away.</p>

       <Reviews id = {id}/>
       
       
       </div>
       </>
      }   
    </div>
  )
}

export default Detail