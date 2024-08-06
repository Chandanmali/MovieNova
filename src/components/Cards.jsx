
import React from 'react'
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Audio, ThreeDots } from "react-loader-spinner";
import Detail from './Detail';
import Datas from '../datas.json'


function Cards({ name, post, Rating, id }) {

  const [data, setData] = useState([]);

  useEffect(() => {
    let addData = () => {
      setData([...data, {
        name: name,
        post: post,
        Rating: Rating,
        id: id
      }]);
  
      // setName("");
      // setEmail("");
    }
    addData();
  }, [])
  
  

  // let removeData = (index) => {
  //   let a = data;
  //   a.splice(index, 1);
  //   setData([...a]);
  // }


  

  return (
    <div className='inline-flex justify-center relative md:left-6 md:px-1 mt-6'>
      
    <div className='flex-wrap justify-center ml-2 mt-3'>
      <Link to={`/detail/${id}`}><div className='p-2 shadow-lg transition-all duration-500 bg-slate-800 bg-blue rounded-lg hover:-translate-y-4 cursor-pointer mt-6 '>
        <img className='h-48 flex justify-center md:h-64  rounded-xl transition-all duration-500  hover:opacity-75 ease-in-out ml-2' src={post} alt="Loading" />
        <h1 className='text-center font-bold'>{name}</h1>
        <h1 className='text-center flex justify-center'>
          <ReactStars
            size={27}
            half={true}
            value={Rating}
            edit={false} />
        </h1>


      </div></Link>
      
    </div>
    </div>

    
    
  )

}

export default Cards