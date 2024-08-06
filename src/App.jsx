import { useState } from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import Datas from './datas.json'
import {Routes, Route} from 'react-router-dom'
import Detail from './components/Detail'
import { createContext } from 'react'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Signup3 from './components/Signup3'
import React, { useEffect } from 'react';
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'

const Appstate = createContext();

function App({id}) {
    const navigate = useNavigate();
    useEffect(() => {
      const timer = setTimeout(() => {
        //alert('This is a 5-second alert!');
        swal({
          title: "Please Sign Up for Best Experience",
          icon: "warning",
          buttons: true,
          timer: 1400000
        }).then((willDelete) => {
          if (willDelete) {
            
            navigate('/signup3');
          }

        })
      }, 8000); // 5000 milliseconds = 5 seconds
  
      // Clean up the timer if the component is unmounted before the timer completes
      return () => clearTimeout(timer);
    }, []); 



  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");

  let filterData0 = Datas.filter((usrr) => {return usrr.id == 0;})
  let filterData1 = Datas.filter((usrr) => {return usrr.id == 1;})
  let filterData2 = Datas.filter((usrr) => {return usrr.id == 2;})
  let filterData3 = Datas.filter((usrr) => {return usrr.id == 3;})
  let filterData4 = Datas.filter((usrr) => {return usrr.id == 4;})
  let filterData5 = Datas.filter((usrr) => {return usrr.id == 5;})
  let filterData6 = Datas.filter((usrr) => {return usrr.id == 6;})
  let filterData7 = Datas.filter((usrr) => {return usrr.id == 7;})
  let filterData8 = Datas.filter((usrr) => {return usrr.id == 8;})
  let filterData9 = Datas.filter((usrr) => {return usrr.id == 9;})
  let filterData10 = Datas.filter((usrr) => {return usrr.id == 10;})
  let filterData11 = Datas.filter((usrr) => {return usrr.id == 11;})
  let filterData12 = Datas.filter((usrr) => {return usrr.id == 12;})
  let filterData13 = Datas.filter((usrr) => {return usrr.id == 13;})
  let filterData14 = Datas.filter((usrr) => {return usrr.id == 14;})
  

  return (
    <Appstate.Provider value={{login, userName, setLogin, setUserName}}>
    <>
      <Header />
      <Routes>
     
      {
        <Route path="/" element={Datas.map((element, index) => { 
          return(
          <Cards 
          key = {index}
          name = {element.name}
          post = {element.post}
          Rating = {element.Rating}
          id = {element.id}
          />
          )  
         }
        )}
       />  

      }

      <Route path = "/welcome" element={<Welcome/>} />

    

<Route path={`/detail/${0}`} element = {filterData0.map((element, index) => { 
          return(
          <Detail key = {index}
          name = {element.name}
          post = {element.post}
          Rating = {element.Rating}
          id = {element.id}
          />
          )
        }
  )} />

<Route path={`/detail/${1}`} element = {filterData1.map((element, index) => { 
          return(
          <Detail key = {index}
          name = {element.name}
          post = {element.post}
          Rating = {element.Rating}
          id = {element.id}
          />
          )
        }
  )} />

<Route path={`/detail/${2}`} element = {filterData2.map((element, index) => { 
          return(
          <Detail key = {index}
          name = {element.name}
          post = {element.post}
          Rating = {element.Rating}
          id = {element.id}
          />
          )
        }
  )} />

<Route path={`/detail/${3}`} element = {filterData3.map((element, index) => { 
          return(
          <Detail key = {index}
          name = {element.name}
          post = {element.post}
          Rating = {element.Rating}
          id = {element.id}
          />
          )
        }
  )} />

<Route path={`/detail/${4}`} element = {filterData4.map((element, index) => { 
          return(
          <Detail key = {index}
          name = {element.name}
          post = {element.post}
          Rating = {element.Rating}
          id = {element.id}
          />
          )
        }
  )} />
<Route path={`/detail/${5}`} element = {filterData5.map((element, index) => { 
          return(
          <Detail key = {index}
          name = {element.name}
          post = {element.post}
          Rating = {element.Rating}
          id = {element.id}
          />
          )
        }
  )} />
<Route path={`/detail/${6}`} element = {filterData6.map((element, index) => { 
          return(
          <Detail key = {index}
          name = {element.name}
          post = {element.post}
          Rating = {element.Rating}
          id = {element.id}
          />
          )
        }
  )} />
<Route path={`/detail/${7}`} element = {filterData7.map((element, index) => { 
          return(
          <Detail key = {index}
          name = {element.name}
          post = {element.post}
          Rating = {element.Rating}
          id = {element.id}
          />
          )
        }
  )} />
<Route path={`/detail/${8}`} element = {filterData8.map((element, index) => { 
          return(
          <Detail key = {index}
          name = {element.name}
          post = {element.post}
          Rating = {element.Rating}
          id = {element.id}
          />
          )
        }
  )} />
<Route path={`/detail/${9}`} element = {filterData9.map((element, index) => { 
          return(
          <Detail key = {index}
          name = {element.name}
          post = {element.post}
          Rating = {element.Rating}
          id = {element.id}
          />
          )
        }
  )} />
<Route path={`/detail/${10}`} element = {filterData10.map((element, index) => { 
          return(
          <Detail key = {index}
          name = {element.name}
          post = {element.post}
          Rating = {element.Rating}
          id = {element.id}
          />
          )
        }
  )} />
<Route path={`/detail/${11}`} element = {filterData11.map((element, index) => { 
          return(
          <Detail key = {index}
          name = {element.name}
          post = {element.post}
          Rating = {element.Rating}
          id = {element.id}
          />
          )
        }
  )} />
<Route path={`/detail/${12}`} element = {filterData12.map((element, index) => { 
          return(
          <Detail key = {index}
          name = {element.name}
          post = {element.post}
          Rating = {element.Rating}
          id = {element.id}
          />
          )
        }
  )} />
<Route path={`/detail/${13}`} element = {filterData13.map((element, index) => { 
          return(
          <Detail key = {index}
          name = {element.name}
          post = {element.post}
          Rating = {element.Rating}
          id = {element.id}
          />
          )
        }
  )} />
<Route path={`/detail/${14}`} element = {filterData14.map((element, index) => { 
          return(
          <Detail key = {index}
          name = {element.name}
          post = {element.post}
          Rating = {element.Rating}
          id = {element.id}
          />
          )
        }
  )} />

<Route path = "/login" element={<Login/>} />
<Route path = "/signup3" element={<Signup3/>} />






      </Routes>
    </>
    </Appstate.Provider>
  )
}

export default App
export {Appstate}
