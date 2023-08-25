import React from 'react';
import { useContext } from 'react';
import { humid } from './App.js';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
const Card4u = () => {

    const {hum,setHum} = useContext(humid);

    return (
        // <div className='container'>

        <div className='scards'>

        <div>

        <div>humidity <WaterDropIcon fontSize="9px"/> </div>
            <div><span style={{fontWeight:"bolder" , fontSize:"20px"}} >{hum}</span>% </div>
            <div>Description</div>
        </div>
        </div>
        // </div>
    );
}

export default Card4u;
