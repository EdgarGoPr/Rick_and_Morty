import React from "react";

function Favorites({ myFavorites }) {
  const { characters, onClose } = props;

  return (
    <div>
      {characters.map((character) => (
        <Card
          // key={character.id}
          id={character.id}
          image={character.image}
          name={character.name}
          // status={character.status}
          // species={character.species}
          // gender={character.gender}
          // origin={character.origin.name}
          onClose={onClose}
          className="Card"
        />
      ))}
    </div>
  );
}
function mapState(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapState, Favorites);
