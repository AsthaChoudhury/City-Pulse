import Slider from '../../components/slider/Slider'
import './SinglePage.scss'
import Map from '../../components/map/Map.jsx'
import {singlePostData, userData} from "../../lib/dummydata.js"

function SinglePage(){
    return(
        <div className="singlePage">
            <div className="details">
                <div className="wrapper">
                    <Slider images={singlePostData.images}/>
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{singlePostData.title}</h1>
                                <div className="address">
                                    <img src='/pin.png' alt=''/>
                                    <span>{singlePostData.address}</span>
                                </div>
                                
                            </div>
                            <div className="user">
                                    <img src={userData.img} alt='' />
                                    <span>{userData.name}</span>
                                </div>
                        </div>
                        <div className="bottom">
                            {singlePostData.description}
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
                            <p>9:00 to 5:00</p>
                        </div>
                    </div>

                    <div className="feature">
                        <img src='/fee.png' alt='' />
                        <div className="featureText">
                            <span>price for two</span>
                            <p>1200</p> 
                        </div>
                    </div>
                </div>
               
                <p className="title">Contact Info</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>mail id</span>
                <p>{singlePostData.contact_info.email}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Phone number</span>
                <p>{singlePostData.contact_info.phone}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>website</span>
                <p>{singlePostData.contact_info.website}</p>
              </div>
            </div>
          </div>


                <p className='title'>Location</p>
                <div className="mapContainer">
                    <Map items={[singlePostData]}/>
                </div>
                <button>
                    <img src='/save.png' alt=''/>
                    Save
                </button>
            </div>
            </div>
        </div>
    )
}

export default SinglePage