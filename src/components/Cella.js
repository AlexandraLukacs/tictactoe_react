import React, { useContext } from 'react'
import "./Cella.css"
import { KattContext } from '../context/KattContext'

export default function Cella(props) {
  const {katt}=useContext(KattContext)
    function kattintas(){
        // Jatekter katt függvényét kell hívni? - megkapta a props-on keresztül
        katt(props.index)
    }
  return (
    <div className='cella' onClick={()=>kattintas()}>{props.jel}</div>
  )
}
