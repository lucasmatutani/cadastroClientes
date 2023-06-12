require('./bootstrap');

import React from 'react';
import { createRoot } from 'react-dom/client';
import RegisterCustomer from './components/RegisterCustomer';
import SearchCustomer from './components/SearchCustomer';
import 'bootstrap/dist/css/bootstrap.css';

const registerCustomerContainer = document.getElementById('registerCustomer');
const searchCustomerContainer = document.getElementById('searchCustomer');

if (registerCustomerContainer !== null) {
    const registerRoot = createRoot(registerCustomerContainer);
    registerRoot.render(<RegisterCustomer />);
}

if (searchCustomerContainer !== null) {
    const searchRoot = createRoot(searchCustomerContainer);
    searchRoot.render(<SearchCustomer />);
}
