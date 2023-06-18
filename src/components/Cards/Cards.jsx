import Card from "../Card/Card";
import './Cards.css'

export default function Cards(props) {
  const { characters, onClose } = props;

  return (
    <div className = 'Cards'>
      {characters.map((character) => (
        <Card
          // key={character.id}
          id = {character.id}
          image={character.image}
          name={character.name}
          // status={character.status}
          // species={character.species}
          // gender={character.gender}
          // origin={character.origin.name}
          onClose={onClose}
          className = 'Card'
        />
      ))}
    </div>
  );
}

/*
name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
*/