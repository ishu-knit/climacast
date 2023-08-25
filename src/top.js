import React from "react";
// import AllCards from "./AllCards";
import Card_top_right from "./Card_top_right";
import Card1 from "./Card1";

export default function Top() {
    return (
        <>
            <div >
                <div className="left">
                    <Card1 />
                </div>
                <div className="right">    
                    <Card_top_right />
                </div>
            </div>
        </>
    )
}