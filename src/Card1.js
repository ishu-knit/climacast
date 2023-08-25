
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import React from 'react'
import { useContext , useState ,useEffect } from 'react';
import {temperature,condition, areaname,icons} from "./App.js"
import Fetch from './Fetch.js';
import Fetch_for_days from './Fetch_for_days.js';

import "./Card.css"
import { height } from '@mui/system';


export default function Card1() {

  const {temp,setTemp} = useContext(temperature)
  const {con, setCon}= useContext(condition);
  const {area,setArea} = useContext(areaname)
  const {icon,setIcon} = useContext(icons);
  const date = new Date()


  const [y, sety] = useState("");



// month in words 
const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'
];

function typing(e) {
  let x = e.target.value
  sety(x)
}

function adding() {
  if (y!=="")
  {setArea(y)}
  else{alert("Empty State")}
}


return (
  <>
<Fetch/>

    <div className='container'>
    <div  className='left_cards'>

    <div>

    <input type="text" 
    placeholder='Enter City' 
   onChange={typing}
   onKeyDown={(e)=>{
    if(e.key==="Enter")
    {adding()}
   }}

   style={{border:"none" , borderBottom:"3px solid black", outline:"None", color:"white" ,backgroundColor:"transparent" , marginBottom:"13px" , marginTop:"28px"}}
   />
    </div>

        <div>
       <img className='mainimg' style={{  width:"100px" ,  height:"100px", filter:"brightness(2)" ,display:"inline-block", background:"transparent"}} src={`https://openweathermap.org/img/wn/${icon}.png`}  alt="lk"  height= "60px" />
        </div>

      <div style={{fontSize:"2rem"}}>{temp}°C</div>
      <div style={{fontSize:"1.3rem"}}>{con}</div>
      {/* <span></span> */}
      <hr width="250px" color='#203744'></hr>
      
      <div > <CalendarMonthIcon fontSize='sm' /> {date.getDate()}-{ months[date.getMonth()]} ,{date.getFullYear()} </div>
      <div><LocationOnIcon fontSize='sm'/>{area}</div>
    </div>
    </div>
    </>
  )
}
