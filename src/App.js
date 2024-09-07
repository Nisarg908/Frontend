// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/Signin';
import Register from './pages/Register';
import Records from './pages/Records';
import Home from './pages/Home';
import Analysis from './pages/Analysis';
import Budgets from './pages/Budgets';
import Accounts from './pages/Accounts';
import Categories from './pages/Categories';
import PrivateRoute from './auth_components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protect these routes */}
        <Route 
          path="/records" 
          element={
            <PrivateRoute>
              <Records />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/analysis" 
          element={
            <PrivateRoute>
              <Analysis />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/budgets" 
          element={
            <PrivateRoute>
              <Budgets />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/accounts" 
          element={
            <PrivateRoute>
              <Accounts />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/categories" 
          element={
            <PrivateRoute>
              <Categories />
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
