/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, withRouter } from 'react-router-dom';

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';
import Navbar from './components/Navbar';
import HomePage from './pages/main/Homepage';
import UsersPage from './pages/main/UsersPage';
import LoginPage from './pages/main/LoginPage';
import RegisterPage from './pages/main/RegisterPage';
import AuthAPI from './services/authAPI';
import AuthContext from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductsPage from './pages/main/ProductsPage';
import ProductPage from './pages/main/ProductPage';
import UsersAPI from './services/usersAPI';

console.log("Hello World !!!");

AuthAPI.setup();

const App = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(AuthAPI.isAuthenticated());
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: ""
    });

    const NavbarWithRouter = withRouter(Navbar);

    const userId = window.localStorage.getItem("userId");

    const fetchUser = async userId => {
        try {
            const { firstName, lastName, username, email } = await UsersAPI.find(userId);
            setUser({ firstName, lastName, username, email });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUser(userId);
    }, [userId])

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            <HashRouter>
                <NavbarWithRouter user={user} />
                <main className="container pt-5">
                    <Switch>
                        <PrivateRoute path="/products/:id" component={ProductPage} />
                        <PrivateRoute path="/products" component={ProductsPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <PrivateRoute path="/users" component={UsersPage} />
                        <Route path="/" component={HomePage} />
                    </Switch>
                </main>
            </HashRouter>
            <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
        </AuthContext.Provider>
    );
};

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);