import React, { useState } from 'react';
import "./bulb.css";
import bulbOff from "./bulbOff.jpg";
import bulbOn from "./bulbOn.avif";

const BulbOnOff = () => {

  const [status, setStatus] = useState(false);

  let handleBulb = () => {
    setStatus(prev => !prev);
  };

  return (
    <div>
      <label>Bulb: </label> <br />

      <img 
        src={status ? bulbOn : bulbOff} 
        alt="bulb" 
        width="150px"
      />

      <br /><br />


      <button onClick={handleBulb}>
        {status ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
};

export default BulbOnOff;