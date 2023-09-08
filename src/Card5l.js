import React from 'react'
import { useState , useContext } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { visibile } from './App.js'
export default function Card5l() {

const {vis,setVis} = useContext(visibile);


  return (
    // <div className='container'>

    <div className='scards'>
<div>


    <div>Visibility <VisibilityIcon fontSize='9px'/></div>
    <div><span style={{fontWeight:"bolder" , fontSize:"20px" }} >  {vis} </span> km </div>      
    <div> {vis<2?(" Low visibility"):("Visibility clear")}</div>
    </div>
</div>
    // </div>
  )
}
