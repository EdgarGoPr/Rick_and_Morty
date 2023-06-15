import './Card.css'
import {Link} from 'react-router-dom'

export default function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose } = props;

  return (
    <div className = 'FondoCarta'>
      <button onClick={() => onClose(id)}>X</button>

      <Link to={`/detail/${id}`} >
        <h3 className="card-name">{name}</h3>
      </Link>

      <h2 className = 'Properties'>{status}</h2>
      <h2 className = 'Properties'>{species}</h2>
      <h2 className = 'Properties'>{gender}</h2>
      <h2 className = 'Properties'>{origin}</h2>
      <img src={image} alt="" className = 'Imagen'/>
    </div>
  );
}
