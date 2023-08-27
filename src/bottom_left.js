import React from 'react'

import Fetch_for_days from './Fetch_for_days'

export default function Bottom_left() {
  
    return (
    <div>
     <div style={{color:"white" , margin:"10px"  , fontSize:"20px" , textAlign:"center"}}>

      5days Forecast
     </div>
     

      <Fetch_for_days/>
    </div>
  )
}
