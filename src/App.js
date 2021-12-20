import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import axios from 'axios';
import Pagination from './Pagination';


function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentUrl]= useState("")
  const[nextPageUrl, setnextPageUrl]= useState()
  const  [prevPageurl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

useEffect(()=> {
  setLoading(true)
  let cencel
  axios.get(currentPageUrl, {cancelToken:new axios.cancelToken(c=>cancel = c)
  
  }).then(res => {
    setLoading(false)
    setnextPageUrl(res.data.next)
    setPrevPageUrl(res.data.previous)
    setPokemon(res.data.results.map(p=>p.name))
  })
  return ()=> cancel()
}, [currentPageUrl]);

function gotoNextPage() {
  setCurrentPageUrl(nextPageUrl)
}

function gotoPrevPage() {
  setCurrentPageUrl(prevPageurl)
}

if(loading)return"Loading..."

  return (
    <div>
      <PokemonList pokemon = {pokemon} />
      <PokemonList
      gotoNextPage = {nextPageUrl? gotoNextPage: null}
      gotoNextPage = {prevPageUrl? gotoPrevPage: null}
      />
    </div>
  );
}

export default App;
