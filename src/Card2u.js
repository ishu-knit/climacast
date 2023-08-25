import React from 'react'
import { useState , useContext } from 'react';
import {windstatus} from "./App.js"
import WindPowerIcon from '@mui/icons-material/WindPower';

export default function Card2() {

  const {wind,setwind} = useContext(windstatus);

  return (
 

    <div className='cards'>
    <div>
      Wind Status <WindPowerIcon fontSize='9px'/>
    </div>
    <div>Graph</div>
    <div> <span style={{fontWeight:"bolder" , fontSize:"20px"}}> {wind}</span>  km/h </div>
    </div>
  )
}
