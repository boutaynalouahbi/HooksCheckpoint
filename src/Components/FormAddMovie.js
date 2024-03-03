import React, { useState ,useEffect,useContext} from 'react'
import { Form,Button, Container } from 'react-bootstrap'


export default function FormAddMovie({sendData,movies}) {

    
    const [movieList,setMovieList]=useState(movies);

    const [title,setTilte]=useState('')
    const [overview,setOverview]=useState('')
    const [note,setNote]=useState('')
    const [poster,setPoster]=useState('')

    function handelSubmit(e) {
        e.preventDefault();
        const movie={'original_title':title,'overview':overview,'vote_average':note,'poster_path':poster}
        setMovieList((prevList)=>{
            sendData([...prevList,movie]);
            localStorage.setItem("movies", JSON.stringify([...prevList,movie]));
            return [...prevList,movie]
        })
        
        setTilte('');
        setOverview('');
        setNote('');
    }

  return (
    <Container className='m-top'>
         <h1 className='text-center'>Add Movie</h1>
        <Form onSubmit={handelSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label  className='size'>Title</Form.Label>
        <Form.Control size="lg" type="text" placeholder="title" value={title} onChange={(e)=>setTilte(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label className='size'>Overview</Form.Label>
        <Form.Control size="lg" as="textarea" rows={3} value={overview} onChange={(e)=>setOverview(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='size'>Note</Form.Label>
        <Form.Control size="lg" type="number" placeholder="note" value={note} onChange={(e)=>{setNote(e.target.value)}} />
      </Form.Group>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label className='size'>Poster</Form.Label>
        <Form.Control type="file" size="lg" accept="image/*" value={poster} onChange={(e)=>{setPoster(e.target.value)}} />
      </Form.Group>
      <div className="d-grid gap-2">
      <Button variant="primary" size="lg" type="submit">
      Add Movie
      </Button>
    </div>
    </Form>
    </Container>
  )
}
