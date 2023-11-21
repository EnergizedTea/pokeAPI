import React from 'react'
import './Special.css'

export const Pokemon = ({pokemon}) => {
  return (
    <div class="card text-success bg-warning mb-3 ">
      <div class='singleGrid'>
        <img class="card-img-top" src={pokemon.image} alt={`${pokemon.name} imagen`}/>
      </div>
      <div class="card-body">
        <h3 class="card-title">{pokemon.name.toUpperCase()}</h3>
        <br></br>
        <a href="#" class="btn btn-info btn-lg text-success">Agregame!</a>
      </div>
    </div>
  )
}
