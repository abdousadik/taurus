import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import TableLoader from '../../components/loaders/TableLoader';
import Pagination from '../../components/Pagination';
import UsersAPI from '../../services/usersAPI';

const UsersPage = (props) => {

    const [users, setUsers] = useState([]);
    const [currentpage, setCurrentpage] = useState(1);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const data = await UsersAPI.findAll()
                setUsers(data);
                setLoading(false);
            } catch (error) {
                toast.error("Erreur lors du Chargement des Utilisateurs !");
                console.log(error.response);
            }
        }
        fetchUsers();
    }, []);

    const handlePageChange = (page) => setCurrentpage(page);


    const handleSearch = ({ currentTarget }) => {
        setSearch(currentTarget.value);
        setCurrentpage(1);
    }

    const itemsParPage = 4;

    const filteredUsers = users.filter(c =>
        c.firstName.toLowerCase().includes(search.toLowerCase()) ||
        c.lastName.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase()) ||
        c.username.toLowerCase().includes(search.toLowerCase())
    )

    const paginatedUsers = Pagination.getData(filteredUsers, currentpage, itemsParPage);

    return (
        <>
            <h1>Liste des Utilisateurs</h1>

            <div className="form-group">
                <input type="text" onChange={handleSearch} value={search} className="form-control" placeholder="Rechercher ..." />
            </div>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Login</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                {!loading && <tbody>
                    {paginatedUsers.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>
                                <a href="#">{user.username}</a>
                            </td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                        </tr>
                    )}
                </tbody>}
            </table>
            {loading && <TableLoader />}

            {itemsParPage < filteredUsers.length &&
                <Pagination currentpage={currentpage} itemsParPage={itemsParPage} length={filteredUsers.length} onPageChanged={handlePageChange} />
            }
        </>
    );
}

export default UsersPage;