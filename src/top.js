import React from "react";
// import AllCards from "./AllCards";
import Card_top_right from "./Card_top_right";
import Card1 from "./Card1";

export default function Top() {
    return (
        <>
            <div className="top" style={{display:"flex",flexWrap:"wrap"}} >
                <div className="left" style={{flex:"1"}}>
                    <Card1 />
                </div>
                <div className="right"style={{display:"flex",flexWrap:"wrap"}}>   
                    <Card_top_right />
                </div>
            </div>
        </>
    )
}