import React from 'react'
import Cella from './Cella'

export default function Jatekter(props) {
    console.log(props)
    function katt(adat){
        props.katt(adat)
    }
  return (
    <>
        {
            props.lista.map((elem, index)=>{
                return(<Cella jel={elem} key={index} index={index} katt={katt} />)
            })
        }
    </>
  )
}
