import './Layout.scss'
import NavBar from '../../components/navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'

function Layout(){
    return (
        <div className="layout">
      <div className="navbar">
        <NavBar/>
      </div>
      <div className="content">
      <Outlet/>
      </div>
      
    </div>

    );
}

export default Layout