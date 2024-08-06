import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className='imageContainer'>
        <img src={item.img} alt={item.title} />
      </Link>
      <div className='textContainer'>
      <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <div className="bottom">
            <div className="feature">
                <img src='/bed.png' alt=''/>
                <span>{item.type}</span>
            </div>

            <div className="icons">
                <div className="icon">
                    <img src='/save.png' alt='' />
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
