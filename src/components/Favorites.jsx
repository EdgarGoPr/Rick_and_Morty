import React from "react";
import Card from "./Card/Card";
import { connect } from "react-redux";
import { removeFav } from "./Redux/Actions";

function Favorites({myFavorites, onClose}) {

  function closeFav(id) {
    onClose(id)
    removeFav(id)
  }

  return (
    <div className="Cards">
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

function mapState(st) {
  return {
    myFavorites: st.myFavorites
  }
}

function mapDispatch(d) {
  return {
    removeFav: (id) => d(removeFav(id))
  }
}

export default connect(mapState, mapDispatch)(Favorites)
