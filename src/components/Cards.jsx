import Card from "./Card";
import './Cards.css'

export default function Cards(props) {
  const { characters } = props;

  return (
    <div className = 'Cards'>
      {characters.map((character) => (
        <Card
          image={character.image}
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          onClose={() => window.alert("Emulamos que se cierra la card")}
          className = 'Card'
        ></Card>
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
