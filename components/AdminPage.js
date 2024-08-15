import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHeader from './AdminHeader';

function AdminPage() {
    const [brands, setBrands] = useState([]);
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [newBrandName, setNewBrandName] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Fetch the username from local storage
        const storedUsername = localStorage.getItem('userName');
        if (storedUsername) {
            setUsername(storedUsername);
        }

        // Fetch brands, products, and users when the component loads
        fetch('http://localhost:8080/brands/getallbrands')
            .then(response => response.json())
            .then(data => setBrands(data))
            .catch(error => console.error('Error fetching brands:', error));

        fetch('http://localhost:8080/products/getallproducts')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));

        fetch('http://localhost:8080/users/getallusers')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleAddBrand = () => {
        fetch('http://localhost:8080/brands/addbrand', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ brand_name: newBrandName })
        })
        .then(response => {
            if (response.ok) {
                alert('Brand added successfully');
                setNewBrandName('');
                // Refresh brand list
                return fetch('http://localhost:8080/brands/getallbrands')
                    .then(response => response.json())
                    .then(data => setBrands(data));
            } else {
                alert('Failed to add brand');
            }
        })
        .catch(error => console.error('Error adding brand:', error));
    };

    const handleDeactivateProduct = (productId) => {
        fetch(`http://localhost:8080/products/deactivate/${productId}`, {
            method: 'PUT'
        })
        .then(response => {
            if (response.ok) {
                alert('Product deactivated successfully');
                // Refresh product list
                return fetch('http://localhost:8080/products/getallproducts')
                    .then(response => response.json())
                    .then(data => setProducts(data));
            } else {
                alert('Failed to deactivate product');
            }
        })
        .catch(error => console.error('Error deactivating product:', error));
    };

    const handleDeactivateUser = (userId) => {
        fetch(`http://localhost:8080/users/deactivate/${userId}`, {
            method: 'PUT'
        })
        .then(response => {
            if (response.ok) {
                alert('User deactivated successfully');
                // Refresh user list
                return fetch('http://localhost:8080/users/getallusers')
                    .then(response => response.json())
                    .then(data => setUsers(data));
            } else {
                alert('Failed to deactivate user');
            }
        })
        .catch(error => console.error('Error deactivating user:', error));
    };

    const handleDeactivateBrand = (brandId) => {
        fetch(`http://localhost:8080/brands/deactivate/${brandId}`, {
            method: 'PUT'
        })
        .then(response => {
            if (response.ok) {
                alert('Brand deactivated successfully');
                // Refresh brand list
                return fetch('http://localhost:8080/brands/getallbrands')
                    .then(response => response.json())
                    .then(data => setBrands(data));
            } else {
                alert('Failed to deactivate brand');
            }
        })
        .catch(error => console.error('Error deactivating brand:', error));
    };

    return (
        <div>
            <AdminHeader/>
            <div className="container mt-5 mb-5">
                <h1>Welcome {username}</h1>
                <div className="card mt-3">
                    <div className="card-body">
                        <h2>Add Brand</h2>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Brand Name"
                                value={newBrandName}
                                onChange={(e) => setNewBrandName(e.target.value)}
                            />
                            <button className="btn btn-primary" onClick={handleAddBrand}>Add Brand</button>
                        </div>
                    </div>
                </div>

                <div className="card mt-3">
                    <div className="card-body">
                        <h2>Deactivate Product</h2>
                        <ul className="list-group">
                            {products.map(product => (
                                <li key={product.product_id} className="list-group-item d-flex justify-content-between align-items-center">
                                    {product.product_name}
                                    <button className="btn btn-danger" onClick={() => handleDeactivateProduct(product.product_id)}>Deactivate</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="card mt-3">
                    <div className="card-body">
                        <h2>Deactivate User</h2>
                        <ul className="list-group">
                            {users.map(user => (
                                <li key={user.user_id} className="list-group-item d-flex justify-content-between align-items-center">
                                    {user.username}
                                    <button className="btn btn-danger" onClick={() => handleDeactivateUser(user.user_id)}>Deactivate</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="card mt-3">
                    <div className="card-body">
                        <h2>Deactivate Brand</h2>
                        <ul className="list-group">
                            {brands.map(brand => (
                                <li key={brand.brand_id} className="list-group-item d-flex justify-content-between align-items-center">
                                    {brand.brand_name}
                                    <button className="btn btn-danger" onClick={() => handleDeactivateBrand(brand.brand_id)}>Deactivate</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminPage;