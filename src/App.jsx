import React, { useEffect, useState } from "react";
import SingleColumn from "./Components/SingleColumn/SingleColumn";

const App = () => {
  const [state, setState] = useState([]);
  useEffect(()=>{
    let getAllLinks = async ()=> {
    let res = await fetch("http://localhost:3000/get_all_links");
    console.log(res)
    let final_res = await res.json();
    setState(final_res)
    } 
    getAllLinks()
  },[])

  return (
    <>
      <div className="w-screen overflow-x-scroll scrollbar-thin scrollbar-thumb-sky-700">
        <div className="w-full flex items-center p-6">
          {state?.map((singleCol) => (
            <SingleColumn singleCol={singleCol} key={singleCol._id}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
