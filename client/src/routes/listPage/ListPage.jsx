import './ListPage.scss';
import { listdata } from '../../lib/dummydata.js';
import Filter from "../../components/filter/Filter.jsx";
import Card from '../../components/card/Card.jsx';
import Map from '../../components/map/Map.jsx';
import { useState } from 'react';

function ListPage() {
    const [filterType, setFilterType] = useState(''); 
    const filteredData = listdata.filter(item => {
        return filterType ? item.type === filterType : true;
    });

    const handleFilterChange = (type) => {
        setFilterType(type);
    };

    return (
        <div className="listpage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter onFilterChange={handleFilterChange} />
                    {filteredData.map(item => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <div className="mapContainer">
                <Map items={filteredData} /> 
            </div>
        </div>
    );
}

export default ListPage;
