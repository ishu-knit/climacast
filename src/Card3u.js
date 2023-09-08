import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import { pressure } from './App'
import { useContext } from 'react';



export default function Card3u() {

const {pres,setPres} = useContext(pressure);

  return (
    <div className='cards'>

<div style={{ display:"flex" , flexDirection:"column"  }}>
      <div >pressure</div>
      <div> <span style={{fontWeight:"bolder" , fontSize:"20px"}}> {pres}</span> mbar  </div>
      <div style={{}} >
        <ReactSpeedometer
          minValue={500}
          maxValue={2000}
          value={pres}
          segmentColors={["	#0099ff","#0066ff", "	#0033ff", "	#0033cc" , "#003399" ]}
          needleColor="white"
          ringWidth={8}
          height={110}
            width={170}
            textColor="grey"
            // valueTextFontSize={10}
            labelFontSize="10"
            needleHeightRatio={0.7}
          needleTransition="easeQuadInOut"
        />
      </div>
    </div>
    </div>

  )
}
