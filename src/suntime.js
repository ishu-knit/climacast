import React from 'react'
import { useState,useEffect } from 'react';
import "./suntime.css"
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';

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
        <div style={{display:"flex" , alignItems:"end" }}>Sunrise & Sunset    <WbSunnyTwoToneIcon fontSize='9px'/></div>

        <div style={{marginTop:"50px"}}>
        6AM
        <input  type="range" value={formattedtime} min="06:00:00" max="18:00:00"/>
        6PM
        </div>

        <div style={{marginTop:"50px" , textAlign:"center"}}>
        {formattedtime}
        </div>

   
    </div>
  )
}
