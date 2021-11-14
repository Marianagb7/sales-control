import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import Logo from "../assets/logo.jpg";

const Sidebar = () => {
    return (
        <div className='sidebar bg.light'>
                        
            <div className="brand" >                
                <img src= {Logo}   alt=""/>
                                
            </div>
            <div className="text-warning bg-dark text-center"> 
                <h3> Ebro vinos</h3>
            </div>
            <ul>
                               
                               
                <li>
                    <NavLink to ="/admin" exact className="text-light rounded py-2 w-100
                     d-inline-block px-3 "  activeClassName="active"><FaIcons.FaTachometerAlt
                      className="me-2 "/>Dashboard</NavLink>
                </li>
                
                <li>
                    <NavLink to="/admin/usuarios" exact className="text-light rounded py-2 w-100
                     d-inline-block px-3" activeClassName="active"><FaIcons.FaUsersCog 
                     className="me-2"/>Usuarios</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/productos" exact className="text-light rounded py-2 w-100
                     d-inline-block px-3" activeClassName="active"><FaIcons.FaWineBottle
                      className="me-2"/>Registro Productos</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/gestionproductos" exact className="text-light rounded py-3 w-100
                     d-inline-block px-3" activeClassName="active"><FaIcons.FaPaste
                      className="me-2"/>Gestión Productos</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/ventas" exact className="text-light  rounded py-2 w-100
                     d-inline-block px-3" activeClassName="active"><FaIcons.FaCashRegister 
                     className="me-2"/>Registro Ventas</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/gestionventas" exact className="text-light rounded py-2 w-100
                     d-inline-block px-3" activeClassName="active"><FaIcons.FaFileInvoiceDollar
                      className="me-2"/>Gestión Ventas</NavLink>
                </li>  
             </ul>
        
        </div>
    )
}

export default Sidebar;