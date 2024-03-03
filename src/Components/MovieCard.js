import React, { useEffect, useState } from 'react'
import { Card,Button } from 'react-bootstrap';
import '../Styles/style.css'

export default function MovieCard({info}) {

  const {original_title,overview,poster_path,vote_average}=info;
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
        </Card.Body>
      </Card>
    )
}
