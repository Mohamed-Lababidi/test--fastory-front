import React, { useState, useEffect } from "react";
import axios from 'axios'


const API_END_POINT = "localhost:8080"
      

function App () {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get(`${API_END_POINT}`)
      .then((res) => res.data())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log('testApi',data)

    return (

        <div>
         {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
      
        </div>
    );
  }

export default App;
