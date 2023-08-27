import React from 'react'
import Card2 from './Card2u'
import Card4u from './Card4u'
import Card5l from './Card5l'
import Card7u from './Card7u'
import Suntime
 from './suntime'
import Card3u from './Card3u'
export default function Card_top_right() {
  return (
    <div className='topright' >
     <div style={{color:"white"}}>  Today's Highlight</div> 
      <div className="upper" >

      <Card2/>
      <Suntime/>
      <Card3u/>
     
      </div>
      <div className="lower" >
        <Card4u/>
        <Card5l/>
        <Card7u/>
      </div>
    </div>
  )
}
