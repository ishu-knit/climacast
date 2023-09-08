import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { areaname } from "./App.js"

import { useContext, useEffect, useState } from 'react';

export default function Linechart() {
  const { area, setArea } = useContext(areaname);

  const [arr, setArr] = useState([]);
  useEffect(() => {

    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + area + "&appid=7cfee4778ad9117fe9286233a14511ed")
      .then(x => x.json())
      .then(y => {
        // console.log(y)
        // console.log(y.list[0].wind.speed)
          const zz = y.list.map((ele,ind)=>
        ( 
          // to make it object

          {
            "time":ele.dt_txt.split(" ")[1].slice(0,5,)
            ,"wind":ele.wind.speed
          }
        ))

          const z = zz.slice(1,9)
          setArr(z)
  })
  }, []);

  // console.log("zzz",arr)

  return (
    <div>

    <div className='chart-container'>
    <ResponsiveContainer width="100%" height="100%">


      <LineChart width={200} height={150} data={arr}>
        <CartesianGrid strokeDasharray="3 3"  stroke="rgba(0,0,0,0.2)" />

        {/* axisline is used to make the x,y axis darker */}
        <XAxis dataKey="time"  axisLine={{ stroke: 'black' }} tick={{ fill: 'black' }}/>
        <YAxis label={{ value: 'Speed', angle: -90,  }}   axisLine={{ stroke: 'black' }} tick={{ fill: 'black' }}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="wind" stroke="#8884d8" />
      </LineChart>

    </ResponsiveContainer>
    </div>
    </div>
  )
}
