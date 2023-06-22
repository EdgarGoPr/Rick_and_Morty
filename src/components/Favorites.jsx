import React from "react";
import Card from "./Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { removeFav, orderCards, filterCards, reset } from "./Redux/Actions";

export default function Favorites({ onClose }) {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();
  function closeFav(id) {
    onClose(id);
    dispatch(removeFav(id));
  }

  function handleOrder(e) {
    e.preventDefault();
    const { value } = e.target;
    dispatch(orderCards(value));
  }

  function handleFilter(e) {
    e.preventDefault();
    const { value } = e.target;
    dispatch(filterCards(value));
  }

  function resetButton(){
    dispatch(reset)
  }

  return (
    <div className="Cards">
      <select onChange={handleOrder} name="Order" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disable>
          Select Order
        </option>
        <option value="Ascendente">Ascending</option>
        <option value="Descendente">Descending</option>
      </select>
      <select onChange={handleFilter} name="Filter" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disable>
          Select Filter
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <button onClick={resetButton}>Reset</button>
      {myFavorites.map((character) => (
        <Card
          id={character.id}
          image={character.image}
          name={character.name}
          onClose={() => closeFav(character.id)}
          className="Card"
        />
      ))}
    </div>
  );
}

// function mapState(st) {
//   return {
//     myFavorites: st.myFavorites,
//   };
// }

// function mapDispatch(d) {
//   return {
//     removeFav: (id) => d(removeFav(id)),
//   };
// }

// export default connect(mapState, mapDispatch)(Favorites);
