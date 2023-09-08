import React from 'react'
import { useState,useEffect , useContext } from 'react';
import {windstatus,areaname} from "./App.js"
import WindPowerIcon from '@mui/icons-material/WindPower';
import Linechart from './Linechart.js';


export default function Card2() {

  const {wind,setwind} = useContext(windstatus);
  const {area,setArea} = useContext(areaname);

  return (
 

    <div className='cards'>
    <div>
      Wind Status <WindPowerIcon fontSize='9px'/>
    </div>
    <div> <span style={{fontWeight:"bolder" , fontSize:"20px"}}> {wind}</span>  km/h </div>
    <div  >

    <Linechart/>
    </div>

    </div>
  )
}
