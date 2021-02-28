import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Field from '../../components/forms/Field';
import UsersAPI from '../../services/usersAPI';

const RegisterPage = ({ history }) => {

    const [user, setUser] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });

    const [errors, setErrors] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });

    const handleChange = ({ currentTarget }) => {
        const { value, name } = currentTarget;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const apiErrors = {};
        if (user.password !== user.passwordConfirm) {
            apiErrors.passwordConfirm = "Confirmation de Mot de Pass n'est pas conforme à l'original";
            setErrors(apiErrors);
            toast.error("Une Erreur est Survenue !");
            return;
        }

        try {
            await UsersAPI.register(user);
            setErrors({});
            toast.success("Vous êtes Inscrit ! 😁");
            history.replace("/login");
        } catch (error) {
            console.log(error.response);
            const { violations } = error.response.data ? error.response.data : '';
            if (violations) {
                violations.forEach(violation => {
                    apiErrors[violation.propertyPath] = violation.message;
                });
                setErrors(apiErrors);
            }
            toast.error("Une Erreur est Survenue !");
        }
    }

    return (
        <>
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit}>
                <Field label="Login" name="username" value={user.username} onChange={handleChange}
                    placeholder="Votre Login" error={errors.username} />
                <Field label="Prénom" name="firstName" value={user.firstName} onChange={handleChange}
                    placeholder="Votre Prénom" error={errors.firstName} />
                <Field label="Nom" name="lastName" value={user.lastName} onChange={handleChange}
                    placeholder="Votre Nom" error={errors.lastName} />
                <Field label="E-Mail" name="email" value={user.email} onChange={handleChange}
                    placeholder="Votre E-Mail" error={errors.email} />
                <Field label="Mot de Passe" type="password" name="password" value={user.password} onChange={handleChange}
                    placeholder="Votre Mot de Passe" error={errors.password} />
                <Field label="Confirmation de Mot de Passe" type="password" name="passwordConfirm" value={user.passwordConfirm} onChange={handleChange}
                    error={errors.passwordConfirm} />
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Inscription</button>
                    <Link to="/login" className="btn btn-link">J'ai déja un Compte</Link>
                </div>
            </form>
        </>
    );
}

export default RegisterPage;