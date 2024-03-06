import React, { useEffect, useState } from 'react'
import { Card,Button } from 'react-bootstrap';
import '../Styles/style.css'
import { Link, useNavigate } from 'react-router-dom';

export default function MovieCard({info}) {
  const navigate=useNavigate()
  const {original_title,overview,poster_path,vote_average,id}=info;
  // function HandleClick() {
  //   navigate('/description/'+trailer);
  // }
    return (
        <Card style={{ width: '30rem' , marginTop:'20px'}} className='mx-2' >
        <Card.Img variant="top" src={poster_path} />
        <Card.Body>
          
          <Card.Title>  {original_title} </Card.Title>
          <Card.Text>
            <strong>overview : </strong> {overview}
          </Card.Text>
          <Card.Text>
            <strong>note : </strong> {vote_average}
          </Card.Text>
          <Link to={`/description/${id}`}>Trailer</Link>
          {/* <Button onClick={HandleClick}>Trailer</Button> */}
        </Card.Body>
      </Card>
    )
}
