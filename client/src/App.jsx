import HomePage from "./routes/homepage/homepage.jsx"
import { createBrowserRouter, RouterProvider} from "react-router-dom" 
import ListPage from "./routes/listPage/ListPage.jsx"
import  { Layout,RequireAuth } from "./routes/layout/Layout.jsx";
import SinglePage from "./routes/singlePage/SinglePage.jsx";
import Login from "./routes/login/login.jsx";
import ProfilePage from "./routes/profilepage/ProfilePage.jsx";
import NewPostPage from "./routes/newPostPage/newPostPage.jsx";
import Register from "./routes/register/register.jsx";
import ProfileUpdatePage from "./routes/profileUpdate/profileUpdate.jsx";
import { AuthContextProvider } from './context/AuthContext.jsx';
import { UserProvider } from "./context/usercontext.jsx";
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
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return (
    <AuthContextProvider>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </AuthContextProvider>
  );
}

export default App;