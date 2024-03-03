import React, { useContext, useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import '../Styles/style.css'
import { MovieContext } from '../App'

export default function MovieList({movies}) {
      
      
  return (
        <div className=' mt-5  d-flex flex-column align-items-center mx-0 '  id="Movies">
          <h1 className='text-center'>List of movies</h1>
          <p style={{width:'60vw' ,fontSize:'1.5rem'}}>Whether it's scary, funny, dramatic, romantic, or any other genre, cinema knows how to awaken our senses. And with so many titles available, there are so many things to discover!</p>
          <div className='d-flex flex-wrap justify-content-center'>
         {
          movies?.map((d)=>{
            return <MovieCard  key={d.original_title} info={d}/>
          })
         }
        
        </div>
        </div>
  )
}
