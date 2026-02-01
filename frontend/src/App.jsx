import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [not, setNot] = useState([
    { title: "first", description: "first description", age: 20 },
    { title: "first", description: "first description", age: 20 },
    { title: "first", description: "first description", age: 20 },
  ]);


   axios.get("http://localhost:5000/api/note")
   .then((res)=>{
    console.log(res.data.note)
      setNot(res.data.note)
   })



  return (
    <div>
      <div className="note">
        {not.map((note) => {
          return (
            <div className="title">
              <h1> {note.title}</h1>
              <p>{note.description}</p>
              <p>{note.age}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
