import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import ProductsAPI from '../../services/productsAPI';
import { toast } from 'react-toastify';
import TableLoader from '../../components/loaders/TableLoader';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import PopupModal from '../../components/PopupModal';
import Field from '../../components/forms/Field';

const ProductsPage = (props) => {

    const [products, setProducts] = useState([]);
    const [line, setLine] = useState({
        active: 0,
        quantity: 0
    });
    const [currentpage, setCurrentpage] = useState(1);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await ProductsAPI.findAll()
                setProducts(data);
                setLoading(false);
            } catch (error) {
                toast.error("Erreur lors du Chargement des Produits !");
                console.log(error.response);
            }
        }
        fetchProducts();
    }, []);

    const handlePageChange = (page) => setCurrentpage(page);


    const handleSearch = ({ currentTarget }) => {
        setSearch(currentTarget.value);
        setCurrentpage(1);
    }

    const handleDelete = id => {
        const originalProducts = [...products];
        setProducts(products.filter(product => product.id !== id));
        ProductsAPI.deleteProduct(id).catch(error => {
            console.log(error);
            setProducts(originalProducts);
        });
        setShow(false);
    }

    const handleActiveChange = async (e, name, value) => {
        const originalProducts = [...products];
        const originalProduct = originalProducts[e];
        originalProduct.active = value == 1 ? 0 : 1;
        const active = value == 1 ? 0 : 1;
        setLine({ ...originalProduct, [name]: active });
        const data = await ProductsAPI.update(originalProducts[e].id, originalProduct);
    }

    const handleChange = async ({ currentTarget }) => {
        const name = currentTarget.name;
        const index = currentTarget.id.replace(name + "_", '');
        const originalProducts = [...products];
        const originalProduct = originalProducts[index];
        const value = parseInt(currentTarget.value);
        originalProduct.quantity = value;
        setLine({ ...originalProduct, [name]: value });
        await ProductsAPI.update(originalProduct.id, originalProduct);
    }

    const itemsParPage = 4;

    const filteredProducts = products.filter(c =>
        c.productName.toLowerCase().includes(search.toLowerCase()) ||
        c.reference.toLowerCase().includes(search.toLowerCase())
    )

    const paginatedProducts = Pagination.getData(filteredProducts, currentpage, itemsParPage);

    return (
        <>
            <div className="mb-3 d-flex justify-content-between align-items-center">
                <h1>Liste des Produits</h1>
                <Link to="/products/new" className="btn btn-primary">Créer un Produit</Link>
            </div>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Produit</th>
                        <th>Référence</th>
                        <th>Catégorie</th>
                        <th className="text-center">Quantité</th>
                        <th className="text-center">Prix</th>
                        <th className="text-center">Active</th>
                        <th className="text-center"></th>
                    </tr>
                </thead>
                {!loading && <tbody>
                    {paginatedProducts.map((product, index) =>
                        <tr key={product.id}>
                            <PopupModal show={show} handleClose={handleClose} onChangeEvent={handleDelete}
                                value={product.id}
                                title="Supprimer Ce Produit ?"
                                content="Vous êtes sur le point de supprimer ce Produit, êtes-vous sûr ?"
                                button="Supprimer"
                                buttonColor="danger" />
                            <th>
                                <Link to={"/products/" + product.id}>{product.productName}</Link>
                            </th>
                            <th>{product.reference}</th>
                            <th></th>
                            <th className="text-center">
                                <input type="number" value={product.quantity} className="form-control"
                                    onChange={handleChange} id={"quantity_" + index} name="quantity" />
                            </th>
                            <th className="text-center">{product.price.toLocaleString()} DH</th>
                            <th className="text-center">
                                {product.active == 1 && <AiFillCheckCircle onClick={() => handleActiveChange(index, "active", 1)} style={{ fill: "#159F5C", width: "30px", height: "30px" }} />}
                                {product.active != 1 && <AiFillCloseCircle onClick={() => handleActiveChange(index, "active", 0)} style={{ fill: "#DD5145", width: "30px", height: "30px" }} />}
                            </th>
                            <th className="text-center">
                                <Link to={"/products/" + product.id} className="btn btn-sm btn-primary">Editer</Link>&nbsp;
                                <button
                                    onClick={handleShow}
                                    // onClick={() => handleDelete(product.id)} 
                                    className="btn btn-sm btn-danger">Supprimer</button>
                            </th>
                        </tr>)}
                </tbody>}
            </table>
            {loading && <TableLoader />}

            {itemsParPage < filteredProducts.length &&
                <Pagination currentpage={currentpage} itemsParPage={itemsParPage} length={filteredProducts.length} onPageChanged={handlePageChange} />
            }
        </>
    );
}

export default ProductsPage;