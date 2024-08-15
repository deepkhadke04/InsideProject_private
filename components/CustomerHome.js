import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import CustHeader from './CustHeader';
import ProductList from './Products';

function CustomerHome() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve the username from localStorage
    const storedUsername = localStorage.getItem('userName');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div>
      <CustHeader/>
      <h1>Welcome, {username}</h1>
      <ProductList/>
    </div>
  );
}

export default CustomerHome;