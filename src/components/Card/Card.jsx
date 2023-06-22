import "./Card.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../Redux/Actions";
import { useState, useEffect } from "react";

export default function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose } = props;
  const [isFav, setIsFav] = useState(false);
  const {myFavorites} = useSelector((s) => s)
  const dispatch = useDispatch()

  const handleFavorite = function () {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id))
    } else {
      setIsFav(true);
      dispatch(addFav(props))
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  function superClose (){
    onClose(id)
    dispatch(removeFav(id))
  }

  return (
    <div className="FondoCarta">
      <button onClick={() => superClose(id)} className="BotonX"></button>
      {isFav ? (
        <button onClick={handleFavorite} className="BotonFav">❤️</button>
      ) : (
        <button onClick={handleFavorite} className="BotonFav">🤍</button>
      )}
      <Link to={`/detail/${id}`}>
        <img src={image} alt="imagen" className="ImagenPers" />
        <h3 className="card-name">{name}</h3>
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin}</h2>
      </Link>
    </div>
  );
}

// function mapState(state) {
//   return {
//     myFavorites: state.myFavorites,
//   };
// }

// function mapDispatch(dispatch) {
//   return {
//     addFav: (char) => dispatch(addFav(char)),
//     removeFav: (id) => dispatch(removeFav(id)),
//   };
// }

// export default connect(mapState, mapDispatch)(Card);

//* Redux invoca mapState(state), le pasa el state y crea props en Card con lo que retorna el mapState
