import './Card.css'

export default function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose } = props;

  return (
    <div className = 'FondoCarta'>
      <button onClick={() => onClose(id)}>X</button>
      <h2 className = 'Properties'>{name}</h2>
      <h2 className = 'Properties'>{status}</h2>
      <h2 className = 'Properties'>{species}</h2>
      <h2 className = 'Properties'>{gender}</h2>
      <h2 className = 'Properties'>{origin}</h2>
      <img src={image} alt="" className = 'Imagen'/>
    </div>
  );
}
