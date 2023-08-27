import React from "react";
// import AllCards from "./AllCards";
import Card_top_right from "./Card_top_right";
import Card1 from "./Card1";

export default function Top() {
    return (
        <>
            <div className="top" style={{display:"flex" , flexWrap:"wrap" ,
            // border:"4px solid yellow" , 
            justifyContent:"space-around" , paddingTop:"45px" , paddingBottom:"45px"}} >
                
                
                <div className="left" 
                // style={{border:"5px solid aqua" }}
                >
                    <Card1 />
                </div>
                <div className="right" style={{
                    // border:"4px solid purple" ,
                    width:"50%"}}>   
                    <Card_top_right />
                </div>
            </div>
        </>
    )
}