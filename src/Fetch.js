import React from 'react';
import { useEffect , useState } from 'react';
import { useContext } from 'react';
import {temperature,condition, windstatus,humid,visibile, areaname ,feelslike ,icons} from "./App.js"




const Fetch = () => {

    const {temp,setTemp} = useContext(temperature)
    const {con, setCon} = useContext(condition);
    const {wind, setWind} = useContext(windstatus);
    const {hum, setHum} = useContext(humid);
    const {vis, setVis} = useContext(visibile);
    const {area, setArea} = useContext(areaname);
    const {icon , setIcon} = useContext(icons);
    const {feel,setFeel} = useContext(feelslike);
    

    useEffect(() => {

        // if (!initial)
        // {
        
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + area + "&appid=877c1f7d0938d6c1e3c2ff50f4b898d5")
        .then(x=>x.json())
        .then(y=>{
        // console.log(y)
          setCon(y.weather[0].main)
          setTemp( Math.round (y.main.temp - 273.15))
          setHum(y.main.humidity)
          setVis(y.visibility/1000)
          setWind(y.wind.speed) 
          setArea(y.name)
          setFeel(y.main.feels_like)
          setIcon(y.weather[0].icon)
        }) 

    }, [area]);
        


        
    return (
        <>
            
        </>
    );
    }
export default Fetch;