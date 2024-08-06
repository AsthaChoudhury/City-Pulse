import MyList from '../../components/mylist/MyList';
import './ProfilePage.scss'

function ProfilePage(){
    return(
        <div className='profilepage'>
            <div className="details">
                <div className="wrapper">
                <div className="title">
                    <div className="top">
                        
                <h1>User Information</h1>
                    </div>
                        <div className='top'>
                        <button>Update Profile</button>
                        </div>
                    </div>

                    <div className="info">
                        <span>
                            Avatar:
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt='' />
                        </span>
                        <span>Username: <b>John Doe</b></span>
                        <span>Email: <b>John@gmail.com</b></span>
                    </div>

                    <div className="title">
                        <h1>My List</h1>
                        <button>Create new post</button>
                    </div>
                    <MyList/>

                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <MyList/>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;