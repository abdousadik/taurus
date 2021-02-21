import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthAPI from '../services/authAPI';
import AuthContext from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const Navbar = ({ history }) => {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const handleLogout = () => {
        AuthAPI.logout();
        setIsAuthenticated(false);
        toast.info("Vous êtes Déconnecté ! 😊");
        history.push('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink className="navbar-brand" to="/">TAURUS</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    {isAuthenticated && <>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users">Users</NavLink>
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
                            <li className="nav-item">
                                <button className="btn btn-danger" onClick={handleLogout}>Déconnexion</button>
                            </li>
                        )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;