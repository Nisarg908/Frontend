import React, { useState, useEffect } from 'react';
import Dashboardnavbar from '../app_components/Navbar';
import categoriesData from '../categories.json'; // Import the JSON file

const Categories = () => {
  const [incomeCategories, setIncomeCategories] = useState([]);
  const [expenseCategories, setExpenseCategories] = useState([]);

  useEffect(() => {
    // Load categories data from JSON file
    setIncomeCategories(categoriesData.incomeCategories);
    setExpenseCategories(categoriesData.expenseCategories);
  }, []);

  return (
    <div className="dashboard-container">
      <Dashboardnavbar />
      <div className="category-container">
        <div className="income-categories">
          <h2>Income Categories</h2>
          <div className="category-grid">
            {incomeCategories.map((category, index) => (
              <div key={index} className="category-item">{category}</div>
            ))}
          </div>
        </div>
        <div className="expense-categories">
          <h2>Expense Categories</h2>
          <div className="category-grid">
            {expenseCategories.map((category, index) => (
              <div key={index} className="category-item">{category}</div>
            ))}
          </div>
        </div>
        <button className="add-category">+ Add new Category</button>
      </div>
    </div>
  );
};

export default Categories;
