import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Field from '../../components/forms/Field';
import Select from '../../components/forms/Select';
import ProductsAPI from '../../services/productsAPI';

const ProductPage = ({ match, history }) => {

    const { id = "new" } = match.params;

    const [product, setProduct] = useState({
        productName: "",
        reference: "",
        description: "",
        quantity: 0,
        price: 0,
        category: 0,
        active: 1,
        user: 1,
        createdAt: new Date().toLocaleString()
    });

    const [errors, setErrors] = useState({
        productName: "",
        reference: "",
        description: "",
        quantity: "",
        price: "",
        category: "",
        createdAt: "",
        active: "",
        user: ""
    });

    const [editing, setEditing] = useState(false);

    const fetchProduct = async id => {
        try {
            const { productName, reference, description, quantity, price, category, active } = await ProductsAPI.find(id);
            setProduct({ productName, reference, description, quantity, price, category, active });
        } catch (error) {
            console.log(error.response);
            history.replace("/products");
        }
    }

    useEffect(() => {
        if (id !== "new") {
            setEditing(true);
            fetchProduct(id);
        }
    }, [id])

    const handleChange = ({ currentTarget }) => {
        const name = currentTarget.name;
        const value = (currentTarget.name == 'quantity' || currentTarget.name == 'category') ? parseInt(currentTarget.value) : ((currentTarget.name == 'price') ? parseFloat(currentTarget.value) : currentTarget.value);
        setProduct({ ...product, [name]: value })
    }

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            if (editing) {
                const data = await ProductsAPI.update(id, product);
                console.log(data);
            } else {
                console.log(product);
                await ProductsAPI.create(product);
                history.replace("/products");
            }
            setErrors({});
        } catch ({ response }) {
            const { violations } = response.data;
            console.log(response);
            if (violations) {
                const apiErrors = {};
                violations.forEach(({ propertyPath, message }) => {
                    apiErrors[propertyPath] = message;
                });
                setErrors(apiErrors);
            }
        }
    }

    return (<>
        {!editing && <h1>Création d'un Produit</h1> || <h1>Modification d'un Produit</h1>}

        <form onSubmit={handleSubmit}>
            <Field name="productName" label="Nom de Produit" placeholder="Nom de Produit"
                value={product.productName} onChange={handleChange} error={errors.productName} />
            <Field name="reference" label="Référence" placeholder="Référence du Produit"
                value={product.reference} onChange={handleChange} error={errors.reference} />

            <Select name="category" label="Catégorie" value={product.category} error={errors.category}
                onChange={handleChange}>
                <option value="1">Informatique</option>
                <option value="2">Maison</option>
            </Select>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea value={product.description} onChange={handleChange}
                    className={"form-control " + (errors.description && " is-invalid")}
                    placeholder="Description du Produit" id="description" name="description" />
            </div>
            <Field name="quantity" type="number" label="Quantité" placeholder="Quantité du Produit"
                value={product.quantity} onChange={handleChange} error={errors.quantity} />
            <Field name="price" step="0.01" type="number" label="Prix" placeholder="Prix du Produit"
                value={product.price.toLocaleString()} onChange={handleChange} error={errors.price} />
            <div className="form-group">
                <button type="submit" className="btn btn-success">Enregister</button>
                <Link to="/products" className="btn btn-link">Retour à la Liste</Link>
            </div>
        </form>
    </>);
}

export default ProductPage;