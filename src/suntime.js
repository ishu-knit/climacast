import React from 'react'
import { useState,useEffect } from 'react';
export default function Suntime() {

  const [time, setTime] = useState(new Date());
  
  const date = new Date()


  useEffect(() => {

    const interval = setInterval(()=>{
      setTime(new Date())
    },2000)
    return  ()=>{
      clearInterval(interval)
    }

  },[]);
const formattedtime = time.toLocaleTimeString()

  return (
    <div className='cards'>
        <div>Sunrise & Sunset</div>
        {/* <input type="range" value="-5" min="-6" max="6"></input> */}
        {formattedtime}

   
    </div>
  )
}
