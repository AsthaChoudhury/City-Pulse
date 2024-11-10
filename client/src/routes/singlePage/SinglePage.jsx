import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from '../../components/slider/Slider';
import './SinglePage.scss';
import Map from '../../components/map/Map.jsx';
import { useUser } from '../../context/usercontext.jsx';
import {listdata} from "../../lib/dummydata.js"

function SinglePage(){
    const { id } = useParams();
    const { saveItem, savedItems } = useUser();
const item = listdata.find(item => item.id === parseInt(id));

if (!item) return <p>Item not found</p>;

const isSaved = savedItems.some(savedItem => savedItem.id === item.id);

const handleSave = () => {
    if (!isSaved) {
        console.log("Saving item:", item);
        saveItem(item)
    }
};
    return(
        <div className="singlePage">
            <div className="details">
                <div className="wrapper">
                    <Slider images={item.images}/>
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{item.title}</h1>
                                <div className="address">
                                    <img src='/pin.png' alt=''/>
                                    <span>{item.address}</span>
                                </div>
                                
                            </div>
                            <div className="user">
                                    <img src={item.img} alt='' />
                                    <span>{item.name}</span>
                                </div>
                        </div>
                        <div className="bottom">
                            {item.description}
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="wrapper">
                <p className='title'>General</p>
                <div className="listVertival">
                    <div className="feature">
                        <img src='/utility.png' alt='' />
                        <div className="featureText">
                            <span>Opening Hours</span>
                            <p>{item.operating_hours}</p>
                        </div>
                    </div>

                    <div className="feature">
                        <img src='/fee.png' alt='' />
                        <div className="featureText">
                            <span>price for two</span>
                            <p>{item.price_for_two}</p> 
                        </div>
                    </div>
                </div>
               
                <p className="title">Contact Info</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>mail id</span>
                <p>{item.contact_info.email}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Phone number</span>
                <p>{item.contact_info.phone}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>website</span>
                <p>{item.contact_info.website}</p>
              </div>
            </div>
          </div>


                <p className='title'>Location</p>
                <div className="mapContainer">
                    <Map items={[item]}/>
                </div>
                <button onClick={handleSave} disabled={isSaved}>
                        <img src='/save.png' alt='' />
                        {isSaved ? "Saved" : "Save"}
                    </button>
            </div>
            </div>
        </div>
    )
}

export default SinglePage