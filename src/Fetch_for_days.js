import React from 'react'
import { useContext, useEffect , useState } from 'react';
import { areaname } from './App.js';

export default function Fetch_for_days() {

const [days, setDays] = useState([]);
const [imgadd,setimgadd] = useState([]);
const {area,setarea} = useContext(areaname);



const date = new Date()


const months = [
    'Jan', 'Feb', 'March', 'April', 'May', 'June', 
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
  ];
  
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];




    useEffect(() => {
      
fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + area+"&appid=7cfee4778ad9117fe9286233a14511ed")
.then(x=>x.json())
.then(y=>{

const insert = [ y.list[0].main.temp, y.list[5].main.temp,y.list[13].main.temp ,  y.list[21].main.temp ,  y.list[29].main.temp]
setDays(insert)

const arr = [y.list[0] , y.list[5] , y.list[13] , y.list[0]  , y.list[29]]
setimgadd(arr)

})
    }, [area]);

    return (
    <>
    <div className='bcards' style={{border:"3px solid red"}}>
    {days.map((ele,i)=>(
        <div key={i+111}>
        
        <div style={{fontSize:"12px",color:"white" ,margin:"10px" , display:"flex" , flexDirection:"row" , justifyContent:"space-evenly" , alignItems:"center"}}>
        <div>
        <img src= {`https://openweathermap.org/img/wn/${imgadd[i].weather[0].icon}.png`} alt="adf"  />
        </div>
        
        <div>
         {Math.round (ele - 273.15)}°C  
        </div>
        <div>
        {date.getDate()+i}{months[date.getMonth()]}
        </div>
        <div>
        {daysOfWeek[(date.getDay()+i)%7]} 
        </div>
        </div>
        </div>
        ))}
    </div>
    </>
  )
}
