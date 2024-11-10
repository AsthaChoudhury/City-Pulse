import { Link } from 'react-router-dom';
import './Card.scss';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext.jsx';
import { useUser } from '../../context/usercontext.jsx';

function Card({ item, onSave }) {
    const { currentUser } = useContext(AuthContext);
    const { saveItem, savedItems } = useUser();

    const isSaved = savedItems.some(savedItem => savedItem.id === item.id);

const handleSave = () => {
    if (currentUser) {
        if (!isSaved) {
            saveItem(item);
        }
    } else {
        alert("Please log in to save posts");
    }
};

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
                        <div className="icon" onClick={handleSave}>
                            <img src='/save.png' alt='' />
                            <span>{isSaved ? "Saved" : "Save"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
