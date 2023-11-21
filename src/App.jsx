import { useState } from 'react'
import pokeLogo from './assets/pokebola.png'
import { Pokedex } from './components/Pokedex'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://pokeapi.co" target="_blank">
          <img src={pokeLogo} className="logo" alt="Poke logo"/>
        </a>
      </div>
      <br></br>
      <h1>Pokédex</h1>
      <div>
        <Pokedex/>
      </div>
    </>
  )
}

export default App
