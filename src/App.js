
import './App.css';
import Top from './top';
import Bottom from "./bottom"
import { temperature, condition, windstatus, humid, visibile ,areaname , feelslike , icons} from "./GlobalVars"
import { useState } from 'react';


function App() {

  const [temp, setTemp] = useState(0);
  const [con, setCon] = useState("");
  const [wind, setWind] = useState(0);
  const [hum, setHum] = useState(0);
  const [vis, setVis] = useState(0);
  const [area, setArea] = useState("pune");
  const [feel, setFeel] = useState(0);
  const [icon, setIcon] = useState("");
  return (
    <>

    <div className="app"> 

<icons.Provider value={{icon,setIcon}}>

    <feelslike.Provider value={{feel,setFeel}}>
    <areaname.Provider value={{area,setArea}}>
      <temperature.Provider value={{temp,setTemp}} >
        <condition.Provider value={{con,setCon}}>
          <windstatus.Provider value={{wind,setWind}}>
            <humid.Provider value={{hum,setHum}}>
              <visibile.Provider value={{vis,setVis}}>
                <div >
                  <Top />
                  <Bottom/>
                </div>
              </visibile.Provider>
            </humid.Provider>
          </windstatus.Provider>
        </condition.Provider>
      </temperature.Provider>
    </areaname.Provider>
    </feelslike.Provider>
</icons.Provider>
    </div>

    </>
  );
}

export default App;
export {temperature,condition, windstatus,humid,visibile , areaname , feelslike , icons }
