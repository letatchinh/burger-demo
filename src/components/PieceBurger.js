import React from 'react'
import './StyleComponent/berger.css'
export default function PieceBurger({width,borderRadius,background,height,text}) {
  return (
    <div className='pieceBurger' style={{display : 'flex', justifyContent : 'center' , color : 'white' , alignItems : 'center' , height : height , background : background , borderRadius : borderRadius , width : width ? width : '100%' , transition : '0.5s ease' , cursor : 'pointer'}}>
    {text}
    </div>
  )
}
