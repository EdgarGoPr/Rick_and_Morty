import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'
import Error from './components/Error'


function App() {
   const [characters, setCharacters] = useState([])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            const char = characters.find((ch) => ch.id === Number(id))
            if(char) return alert('That character already exists!')
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   function onClose(id) {
      const newCharacters = characters.filter((ch) => ch,id !== id);
      setCharacters(newCharacters)
   }

   return (
      <div className='App'>

         <NavBar onSearch={onSearch} />

         <Routes>
            <Route path = '/About' element = {<About/>}/>
            <Route path = '/Home' element = {<Cards characters={characters} onClose = {onClose}/>}/>
            <Route path = 'Detail/:id' element = {<Detail/>}/>
            <Route component = {Error}/>
         </Routes>
         <Cards characters={characters} onClose = {onClose}/>
      </div>
   );
}

export default App;




