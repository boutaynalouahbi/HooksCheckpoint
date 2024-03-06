import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../data/data'
import { Button } from 'react-bootstrap'

export default function Description() {
    const parms=useParams()
    const id=parms.id
    const navigate=useNavigate()
    const movie=data.find((movie)=>movie.id===id)
    console.log(movie.trailer);
    return (
    <>
    <h2 style={{marginTop:'100px',textAlign:'center'}}>Description</h2>
    <div style={{display:'flex',justifyContent:'center'}}>
    <iframe width="926" height="521" src={movie.trailer}
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <Button onClick={()=>navigate(-1)}>Go Back</Button>
    </>
  )
}
