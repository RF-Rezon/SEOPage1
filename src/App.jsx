import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleColumn from "./Components/SingleColumn/SingleColumn";

const App = () => {
  const [state, setState] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let getAllLinks = async () => {
      try {
        let res = await axios.get("http://localhost:3000/get_all_links");
        if (res) {
          console.log(res)
          setState(res?.data);
          let x = res?.data?.map(single => single?.cards[0])
          setUsers(x[0])
        }
      } catch (err) {
        console.error(err);
      }
    };
    getAllLinks();
  }, []);
  

  useEffect(() => {
    let PushOnlyUsersData = async () => {
      try {
        await axios.post(
          "http://localhost:3000/all_users",
          users
        );
      } catch (err) {
        console.error(err);
      }
    };
    PushOnlyUsersData();
  }, []);

  return (
    <>
      <div className="w-screen overflow-x-scroll scrollbar-thin scrollbar-thumb-sky-700">
        <div className="w-full flex items-center p-6">
          {state?.map((singleCol) => (
            <SingleColumn singleCol={singleCol} key={singleCol._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
