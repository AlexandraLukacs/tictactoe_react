import React from 'react'
import "./Cella.css"

export default function Cella(props) {
    function katt(){
        // Jatekter katt föggvényét kell hívni? - megkapta a props-on keresztül
        props.katt(props.index)
    }
  return (
    <div className='cella' onClick={()=>katt()}>{props.jel}</div>
  )
}
