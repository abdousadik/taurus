import React, { useState, useContext } from 'react';
import AuthAPI from '../../services/authAPI';
import AuthContext from '../../contexts/AuthContext';
import Field from '../../components/forms/Field';
import { toast } from 'react-toastify';

const LoginPage = ({ history }) => {

    const { setIsAuthenticated } = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = ({ currentTarget }) => {
        const { value, name } = currentTarget;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await AuthAPI.authenticate(credentials);
            setError("");
            setIsAuthenticated(true);
            toast.success("Vous êtes Connecté ! 😁");
            history.replace("/users");
        } catch (error) {
            console.log(error);
            setError("Aucun Compte ne possède ce Login, ou bien les informations saisies ne sont pas valide!");
            toast.error("Une Erreur est Survenue !");
        }
    }

    return (
        <>
            <h1>Connexion à L'Application</h1>

            <form onSubmit={handleSubmit}>
                <Field label="Login" name="username" value={credentials.username} onChange={handleChange}
                    placeholder="Votre Login" error={error} />
                <Field label="Mot de Passe" type="password" name="password" value={credentials.password} onChange={handleChange}
                    placeholder="Votre Mot de Passe" error={error} />
                <div className="form-group"><button type="submit" className="btn btn-success">Connexion</button></div>
            </form>
        </>
    );
}

export default LoginPage;