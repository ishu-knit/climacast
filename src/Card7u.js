import React from 'react'
import { useContext } from 'react';
import { feelslike } from './App.js'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';



export default function Card7u() {

const {feel,setFeel} = useContext(feelslike);


let content 
const temp =  Math.round(feel- 273.15)

if (temp>24)
{content= "Hotter" }
else if (temp>=20 || temp<=22)
{content= "Room temp"}
else if (temp<20)
{content= "Colder"}




  return (
    // <div className='container'>

    <div className="scards"> 
    <div>

    <div>
      Feels_like <DeviceThermostatIcon fontSize='sm'/>
      </div>
      <div>
    {  temp}°C
      </div>

      <div>
        {content}
      </div>
    </div>
    </div>
  
    // </div>
  )
}
