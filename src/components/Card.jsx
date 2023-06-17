import './Card.css'
import {Link} from 'react-router-dom'

export default function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose } = props;

  return (
    <div className = 'FondoCarta'>
      <button onClick={() => onClose(id)} className = 'BotonX'>X</button>
      <Link to={`/detail/${id}`} >
        <img src={image} alt="imagen" className = 'ImagenPers'/>
        <h3 className="card-name">{name}</h3>
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin}</h2>
      </Link>
    </div>
  );
}
