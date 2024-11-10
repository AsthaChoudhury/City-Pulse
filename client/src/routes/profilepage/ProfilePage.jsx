// import MyList from '../../components/mylist/MyList.jsx';
// import apiRequest from '../../lib/apiRequest.jsx';
// import './ProfilePage.scss';
// import { useUser } from '../../context/usercontext.jsx';
// import { useContext, useState, useEffect } from 'react';
// import AuthContext from '../../context/AuthContext.jsx';
// import { Link, useNavigate } from 'react-router-dom';

// function ProfilePage() {
//   const { savedItems, saveItem, clearSavedItems } = useUser();
//   const { currentUser, updateUser } = useContext(AuthContext);
//   const [userPosts, setUserPosts] = useState([]);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (!currentUser || !currentUser.id) {
//       setIsLoading(false);
//       return;
//     }

//     const fetchUserPosts = async () => {
//       try {
//         const response = await apiRequest.get(`/posts/user/${currentUser.id}`);
//         setUserPosts(response.data);
//       } catch (err) {
//         console.error("Failed to fetch user posts:", err);
//         setError("Failed to fetch posts. Please try again.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchUserPosts();
//   }, [currentUser]);

//   const handleLogout = async () => {
//     try {
//       const token = localStorage.getItem("authToken");

//       await apiRequest.post("/auth/logout", {}, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       localStorage.removeItem("authToken");
//       clearSavedItems();
//       updateUser(null);
//       navigate("/");
//     } catch (err) {
//       console.log("Logout failed:", err);
//       setError("Logout failed. Please try again.");
//     }
//   };

//   const handleSavePost = (post) => {
//     saveItem(post);
//   };

//   if (!currentUser) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="profilepage">
//       <div className="details">
//         <div className="wrapper">
//           <div className="title">
//             <div className="top">
//               <h1>User Information</h1>
//               <Link to="/profile/update">
//                 <button>Update Profile</button>
//               </Link>
//             </div>
//           </div>

//           <div className="info">
//             {currentUser ? (
//               <>
//                 <span>
//                   Avatar:
//                   <img src={currentUser.avatar} alt="User Avatar" />
//                 </span>
//                 <span>Username: <b>{currentUser.username}</b></span>
//                 <span>Email: <b>{currentUser.email}</b></span>
//               </>
//             ) : (
//               <div>Loading user data...</div>
//             )}
//             <button onClick={handleLogout}>Logout</button>
//           </div>

//           {error && <div className="error">{error}</div>}

//           <div className="title">
//             <h1>My Posts</h1>
//             <Link to="/add">
//               <button>Create New Post</button>
//             </Link>
//           </div>

//           <MyList items={userPosts} onSave={handleSavePost} />

//           <div className="title">
//             <h1>Saved Posts</h1>
//           </div>

//           <MyList items={savedItems} onSave={handleSavePost} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProfilePage;

import MyList from '../../components/mylist/MyList.jsx';
import apiRequest from '../../lib/apiRequest.jsx';
import './ProfilePage.scss';
import { useUser } from '../../context/usercontext.jsx';
import { useContext, useState, useEffect } from 'react';
import AuthContext from '../../context/AuthContext.jsx';
import { Link, useNavigate } from 'react-router-dom';

function ProfilePage() {
  const { savedItems, saveItem, clearSavedItems } = useUser();
  const { currentUser, updateUser ,newPost} = useContext(AuthContext);
  const [userPosts, setUserPosts] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!currentUser || !currentUser.id) {
      setIsLoading(false);
      return;
    }

    const fetchUserPosts = async () => {
      try {
        const response = await apiRequest.get(`/posts/user/${currentUser._id}`);
        setUserPosts(response.data);
      } catch (err) {
        console.error("Failed to fetch user posts:", err);
        setError("Failed to fetch posts. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch saved posts from the backend
    const fetchSavedItems = async () => {
      try {
        const response = await apiRequest.get(`/user/${currentUser.id}/savedItems`);
        saveItem(response.data); // Assuming saveItem updates context with saved items
      } catch (err) {
        console.error("Failed to fetch saved items:", err);
        setError("Failed to fetch saved items. Please try again.");
      }
    };

    fetchUserPosts();
    fetchSavedItems();
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("authToken");

      await apiRequest.post("/auth/logout", {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("authToken");
      clearSavedItems();
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log("Logout failed:", err);
      setError("Logout failed. Please try again.");
    }
  };
  useEffect(() => {
    if (newPost && !userPosts.find(post => post._id === newPost._id)) {
      setUserPosts(prevPosts => [newPost, ...prevPosts]); 
    }
  }, [newPost, userPosts]);
  const handleSavePost = async (post) => {
    try {
      await apiRequest.post(
        "/auth/savePost", 
        { postId: post._id }, 
        { headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` } }
      );
      saveItem(post);
    } catch (err) {
      console.error("Error saving post:", err);
      setError("Failed to save the post. Please try again.");
    }
  };

  const handleRemoveSavedPost = async (post) => {
    try {
      await apiRequest.post(
        "/auth/removeSavedPost", 
        { postId: post._id }, 
        { headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` } }
      );
      saveItem(post, "remove");
    } catch (err) {
      console.error("Error removing saved post:", err);
      setError("Failed to remove the post. Please try again.");
    }
  };

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profilepage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <div className="top">
              <h1>User Information</h1>
              <Link to="/profile/update">
                <button>Update Profile</button>
              </Link>
            </div>
          </div>

          <div className="info">
            {currentUser ? (
              <>
                <span>
                  Avatar:
                  <img src={currentUser.avatar} alt="User Avatar" />
                </span>
                <span>Username: <b>{currentUser.username}</b></span>
                <span>Email: <b>{currentUser.email}</b></span>
              </>
            ) : (
              <div>Loading user data...</div>
            )}
            <button onClick={handleLogout}>Logout</button>
          </div>

          {error && <div className="error">{error}</div>}

          <div className="title">
            <h1>My Posts</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>

          <MyList items={userPosts} onSave={handleSavePost} />

          <div className="title">
            <h1>Saved Posts</h1>
          </div>

          <MyList 
            items={savedItems} 
            onSave={handleSavePost} 
            onRemove={handleRemoveSavedPost} 
          />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
