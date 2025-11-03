
import { useState } from 'react'
import './App.css'
import Autocomplete from './components/autocomplete'

function App() {

  const staticData = [
    "apple",
    "banana",
    "berrl",
    "orange",
    "grape",
    "mango",
    "melon",
    "peach",
    "cherry",
    "plum"
  ];

  const fetchSuggestions = async (query) => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result.recipes;
  }

  return (
    <>

      <h1> Autocomplete / Typehead </h1>
      
      <Autocomplete
        placeholder={"Enter Recipe"}
        // staticData= {staticData}  
        fetchSuggestions={fetchSuggestions}
        datakey={"name"}
        customLoading={<>Loading Recipees.. </>}
        onSelect={(res) => console.log(res)}
        onChange={(input) => { }}
        onBlur={(e) => { }}
        onFocus={(e) => { }}
        customStyles={{}}
      />

    </>
  )
}

export default App
