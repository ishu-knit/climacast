import React from 'react'
import { useContext } from 'react';
import { feelslike } from './App.js'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';



export default function Card7u() {

const {feel,setFeel} = useContext(feelslike);

  return (
    <div className='container'>

    <div className="scards"> 
    <div>
      feels_like <DeviceThermostatIcon fontSize='sm'/>
      </div>
      <div>
    {feel}
      </div>
    </div>
  
    </div>
  )
}
