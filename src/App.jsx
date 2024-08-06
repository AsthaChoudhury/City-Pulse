import HomePage from "./routes/homepage/homepage.jsx"
import { createBrowserRouter, RouterProvider} from "react-router-dom" 
import ListPage from "./routes/listPage/ListPage.jsx"
import Layout from "./routes/layout/Layout.jsx";
import SinglePage from "./routes/singlePage/SinglePage.jsx";
import Login from "./routes/login/login.jsx";
import ProfilePage from "./routes/profilepage/ProfilePage.jsx";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
      element: <HomePage />,
        },
        {
          path: "/list",
      element: <ListPage />,
        },
        {
          path: "/:id",
      element: <SinglePage />,
        },
        {
          path: "/login",
      element: <Login />,
        },
        {
          path: "/profile",
      element: <ProfilePage />,
        }
      ]
      
    }
  ]);
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App