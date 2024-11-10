// import React, { useState } from 'react';
// import './MyList.scss';
// import { listdata } from '../../lib/dummydata.js'; 
// import Card from '../card/Card.jsx';
// import Filter from '../filter/Filter.jsx';
// import { Link } from 'react-router-dom';

// function MyList({ items = listdata, onSave, currentUserId }) { 
//     const [filterType, setFilterType] = useState('');

//     const handleFilterChange = (type) => {
//         console.log('Updated filter type:', type);
//         setFilterType(type);
//     };

//     const filteredData = items
//         .filter(item => (currentUserId ? item.userId === currentUserId : true)) 
//         .filter(item => filterType ? item.type === filterType : true); 

//         return (
//             <div>
//                 <Filter onFilterChange={handleFilterChange} />
//                 <div className="mylist">
//                     {filteredData.length > 0 ? (
//                         filteredData.map(item => (
//                             <Link to={`/item/${item.id}`} key={item.id}> 
//                                 <Card item={item} onSave={onSave} />
//                             </Link>
//                         ))
//                     ) : (
//                         <p>No results found</p>
//                     )}
//                 </div>
//             </div>
//         );
// }

// export default MyList;

import React, { useState } from 'react';
import './MyList.scss';
import { listdata } from '../../lib/dummydata.js'; 
import Card from '../card/Card.jsx';
import Filter from '../filter/Filter.jsx';
import { Link } from 'react-router-dom';

function MyList({ onSave, currentUserId }) { 
    const [filterType, setFilterType] = useState('');
    const [newPosts, setNewPosts] = useState([]); 

    const handleFilterChange = (type) => {
        setFilterType(type);
    };
    const combinedData = [...listdata, ...newPosts];

    const filteredData = combinedData
        .filter(item => (currentUserId ? item.userId === currentUserId : true))
        .filter(item => filterType ? item.type === filterType : true);

    return (
        <div>
            <Filter onFilterChange={handleFilterChange} />
            <div className="mylist">
                {filteredData.length > 0 ? (
                    filteredData.map(item => (
                        <Link to={`/item/${item.id}`} key={item.id}> 
                            <Card item={item} onSave={onSave} />
                        </Link>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
}

export default MyList;
