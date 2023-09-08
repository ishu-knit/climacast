import React from 'react'
import Fetch_for_days from './Fetch_for_days'
import { useState  , useEffect} from 'react';




export default function Bottom_left() {
  
  const [value, setValue] = useState(new Date())


    return (
    <div>
     <div style={{color:"white" , margin:"10px"  , fontSize:"20px" , textAlign:"center"}}>

      5days Forecast
     </div>
      <Fetch_for_days/>
     

    </div>
  )
}
