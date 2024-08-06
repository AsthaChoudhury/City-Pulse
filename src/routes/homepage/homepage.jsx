import SearchBar from '../../components/searchbar/SearchBar'
import './homepage.scss'

function HomePage(){
    return (
        <div className="homepage">
            <div className="textcontainer">
                <div className="wrapper">
                    <h1 className='title'> Dont know where to go?
                         We got you.</h1>
                    <p>Discover the most vibrant and exciting spots in your city. Save your favorite places, explore new destinations, and share your experiences with the community. Sign up now to start your adventure!</p>
                    <SearchBar/>
                    <div className='boxes'>
                        <div className='box'>
                            <h1>Discover</h1>
                            <h2>the best kept secrets</h2>
                        </div>

                        <div className='box'>
                            <h1>Explore</h1>
                            <h2>new destinations</h2>
                        </div>

                        <div className='box'>
                            <h1>Connect</h1>
                            <h2>with the lifestyle</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgcontainer">
                <img src="/Screenshot_2024-07-28_233753-removebg-preview.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage