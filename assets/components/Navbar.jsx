import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AuthAPI from '../services/authAPI';
import AuthContext from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { FaUsers, FaChartLine, FaFacebookMessenger, FaBell, FaUserCircle, FaCog, FaDoorOpen } from 'react-icons/fa';
import { GoPackage } from 'react-icons/go';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { BsFillCaretDownFill } from 'react-icons/bs';
import '../styles/navbar.css';

const Navbar = ({ history, user }) => {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const handleLogout = () => {
        AuthAPI.logout();
        setIsAuthenticated(false);
        toast.info("Vous êtes Déconnecté ! 😊");
        history.push('/login');
    }
    const [open, setOpen] = useState(false);

    const currentPath = history.location.pathname;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <NavLink className="navbar-brand" to="/">TAURUS</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    {isAuthenticated && <>
                        <li className="nav-item">
                            <NavLink className="nav-link icon-button" to="/products"><RiShoppingBag3Line /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link icon-button" to="#"><GoPackage /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link icon-button" to="#"><FaChartLine /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link icon-button" to="/users"><FaUsers /></NavLink>
                        </li>
                    </>}
                </ul>
                <ul className="navbar-nav ml-auto">
                    {(!isAuthenticated && (
                        <>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">Insription</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="btn btn-success">Connexion</NavLink>
                            </li>
                        </>
                    )) || (
                            <>
                                <li className="nav-item">
                                    <NavLink className="icon-button-circle" to="#"><FaFacebookMessenger /></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="icon-button-circle" to="#"><FaBell /></NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="icon-button-circle pointer" onClick={() => setOpen(!open)}>
                                        <BsFillCaretDownFill />
                                    </a>
                                    {open && (
                                        <div className="dropdown">
                                            <NavLink className="menu-item menu-profil" to="#">
                                                <span className="icon-button-circle" style={{ backgroundImage: `url(${require('./avatars/avatar.png')})`, backgroundSize: "55px 55px", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></span>
                                                {user.firstName + " " + user.lastName}
                                                {/* <span className="icon-right"></span> */}
                                            </NavLink>
                                            <NavLink className="menu-item" to="#" style={{ marginTop: "5px" }}>
                                                <span className="icon-button-circle"><FaCog /></span>
                                                Paramètres
                                                {/* <span className="icon-right"></span> */}
                                            </NavLink>
                                            <div className="dropdown-divider"></div>
                                            <a className="menu-item" href="#" onClick={handleLogout}>
                                                <span className="icon-button-circle"><FaDoorOpen /></span>
                                                Déconnexion
                                                {/* <span className="icon-right"></span> */}
                                            </a>
                                        </div>
                                    )}
                                </li>
                                {/* <li className="nav-item">
                                    <button className="btn btn-danger" onClick={handleLogout}>Déconnexion</button>
                                </li> */}
                            </>
                        )}
                </ul>
            </div>
        </nav >
    );
}

export default Navbar;