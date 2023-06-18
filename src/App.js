import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import { useLocation, useNavigate, Routes, Route  } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "unaPassword";
  
  function logout (){
    setAccess(false);
    navigate('/');
  }
  
  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);


  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          const char = characters.find((ch) => ch.id === Number(id));
          if (char) return alert("That character already exists!");
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }
  function onClose(id) {
    const newCharacters = characters.filter((ch) => ch.id !== id);
    setCharacters(newCharacters);
  }

  return (
    <div className="App">
      <div className = 'Titulo'/>
      {location.pathname !== "/" && <NavBar logout = {logout} onSearch={onSearch} />}
      {/* {location.pathname !== "/" ? <NavBar onSearch={onSearch} />} */}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route component={Error} />
      </Routes>
    </div>
  );
}

export default App;
