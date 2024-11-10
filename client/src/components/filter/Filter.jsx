import { useState } from 'react';
import './Filter.scss';

function Filter({ onFilterChange }) {
    const [type, setType] = useState('');

    const handleTypeChange = (e) => {
        setType(e.target.value);
        onFilterChange(e.target.value); 
    };

    return (
        <div className="filter">
           ` {/* <h1>Search results for <b>India</b></h1>` */}
            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" value={type} onChange={handleTypeChange}>
                        <option value="">All</option>
                        <option value="activity">Activity</option>
                        <option value="sightseeing">Sight-seeing</option>
                        <option value="Food">Food</option>
                    </select>
                </div>
                <button onClick={() => onFilterChange(type)}>
                    <img src="/search.png" alt="search icon" />
                </button>
            </div>
        </div>
    );
}

export default Filter;
