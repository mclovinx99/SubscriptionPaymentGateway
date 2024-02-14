import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './LoginSIgnup/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsDashboard from './Dashboard/ProductsDashboard';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login></Login>}></Route>
				<Route path='/products' element={<ProductsDashboard></ProductsDashboard>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
