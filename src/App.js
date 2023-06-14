import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar.jsx';
import { useState } from 'react';
import axios from 'axios';


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
         <Cards characters={characters} onClose = {onClose}/>
      </div>
   );
}

export default App;




