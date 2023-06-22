import Card from "../Card/Card";
import './Cards.css'

export default function Cards(props) {
  const { characters, onClose } = props;

  return (
    <div className = 'Cards'>
      {characters.map((character) => (
        <Card
          id = {character.id}
          image={character.image}
          name={character.name}
          onClose={onClose}
          className = 'Card'
        />
      ))}
    </div>
  );
}
