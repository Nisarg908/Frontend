// // Dashboard.jsx
// import React, { useState, useEffect } from 'react';
// import Dashboardnavbar from "../app_components/Navbar";
// import data from "../transactions.json";

// function Dashboard() {
//   // const [data, setData] = useState(null);

//   // useEffect(() => {
//   //   fetch('../transactions.json')
//   //     .then(response => response.json())
//   //     .then(data => setData(data));
//   // }, []);

//   // if (!data) {
//   //   return <div>Loading...</div>;
//   // }

//   return (
//     <div className="dashboard-container">
//       <Dashboardnavbar />
//       <main className="main-content">
//         <header className="dashboard-header">
//           <div className="header-title">
//             <input type="month" value="2024-06" />
//           </div>
//           <div className="header-totals">
//             <div className="total-item">
//               <p>EXPENSE</p>
//               <p className="amount expense">{data.totals.expense}</p>
//             </div>
//             <div className="total-item">
//               <p>INCOME</p>
//               <p className="amount income">{data.totals.income}</p>
//             </div>
//             <div className="total-item">
//               <p>TOTAL</p>
//               <p className="amount total">{data.totals.total}</p>
//             </div>
//           </div>
//         </header>
//         <section className="transaction-list">
//           {data.transactions.map((transactionGroup, groupIndex) => (
//             <table key={`group-${groupIndex}`} className="transaction-group">
//               <thead>
//                 <tr>
//                   <th colSpan="3" className="transaction-date">{transactionGroup.date}</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {transactionGroup.items.map((transaction, transactionIndex) => (
//                   <tr key={`transaction-${groupIndex}-${transactionIndex}`} className="transaction">
//                     <td className="transaction-title">{transaction.title}</td>
//                     <td className="transaction-type">{transaction.type}</td>
//                     <td className={`transaction-amount ${transaction.className}`}>{transaction.amount}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ))}
//         </section>

//       </main>
//       <button className="add-transaction-btn">+</button>
//     </div>
//   );
// }

// export default Dashboard;
// import React, { useState, useEffect } from 'react';
// import Dashboardnavbar from "../app_components/Navbar";
// import data from "../transactions.json";
// import { FaBackspace } from "react-icons/fa";


// function Dashboard() {
//   const [showPopup, setShowPopup] = useState(false);
//   const [formData, setFormData] = useState({
//     account: '',
//     category: '',
//     notes: '',
//     amount: '',
//     date: '',
//     time: ''
//   });
//   const [calcInput, setCalcInput] = useState('0');

//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       const { key } = event;
//       if (!isNaN(key) || ['+', '-', '*', '/', '.', 'Enter', 'Backspace', 'Delete', 'Escape'].includes(key)) {
//         handleCalcButtonClick(key);
//       }
//     };

//     document.addEventListener('keydown', handleKeyPress);
//     return () => {
//       document.removeEventListener('keydown', handleKeyPress);
//     };
//   }, [calcInput]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCalcButtonClick = (value) => {
//     if (value === 'C' || value === 'Escape') {
//       setCalcInput('0');
//     } else if (value === '=' || value === 'Enter') {
//       try {
//         setCalcInput(eval(calcInput).toString());
//       } catch {
//         setCalcInput('0');
//       }
//     } else if (value === 'Backspace' || value === 'Delete') {
//       setCalcInput(calcInput.slice(0, -1) || '0');
//     } else {
//       setCalcInput(calcInput === '0' ? value.toString() : calcInput + value);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormData({ ...formData, amount: calcInput });
//     console.log(formData);
//     setShowPopup(false);
//   };

//   return (
//     <div className="dashboard-container">
//       <Dashboardnavbar />
//       <main className="main-content">
//         <header className="dashboard-header">
//           <div className="header-title">
//             <input type="month" value="2024-06" />
//           </div>
//           <div className="header-totals">
//             <div className="total-item">
//               <p>EXPENSE</p>
//               <p className="amount expense">{data.totals.expense}</p>
//             </div>
//             <div className="total-item">
//               <p>INCOME</p>
//               <p className="amount income">{data.totals.income}</p>
//             </div>
//             <div className="total-item">
//               <p>TOTAL</p>
//               <p className="amount total">{data.totals.total}</p>
//             </div>
//           </div>
//         </header>
//         <section className="transaction-list">
//           {data.transactions.map((transactionGroup, groupIndex) => (
//             <table key={`group-${groupIndex}`} className="transaction-group">
//               <thead>
//                 <tr>
//                   <th colSpan="3" className="transaction-date">{transactionGroup.date}</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {transactionGroup.items.map((transaction, transactionIndex) => (
//                   <tr key={`transaction-${groupIndex}-${transactionIndex}`} className="transaction">
//                     <td className="transaction-title">{transaction.title}</td>
//                     <td className="transaction-type">{transaction.type}</td>
//                     <td className={`transaction-amount ${transaction.className}`}>{transaction.amount}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ))}
//         </section>
//       </main>
//       <button className="add-transaction-btn" onClick={() => setShowPopup(true)}>+</button>

//       {showPopup && (
//         <div className="popup-overlay">
//           <div className="popup">
//             <div className="popup-header">
//               <button type="button" className="popup-close" onClick={() => setShowPopup(false)}>X Cancel</button>
//               <button type="button" className="popup-save" onClick={handleSubmit}>✔ Save</button>
//             </div>
//             <form onSubmit={handleSubmit}>
//               <div className="popup-body">
//                 <div className="transaction-type">
//                   <button type="button" className="transaction-type-btn">INCOME</button>
//                   <button type="button" className="transaction-type-btn active">EXPENSE</button>
//                   <button type="button" className="transaction-type-btn">TRANSFER</button>
//                 </div>
//                 <div className="input-group-wrapper">
//                   <div className="input-group">
//                     <label>Account</label>
//                     <input type="text" name="account" value={formData.account} onChange={handleInputChange} />
//                   </div>
//                   <div className="input-group">
//                     <label>Category</label>
//                     <input type="text" name="category" value={formData.category} onChange={handleInputChange} />
//                   </div>
//                 </div>

//                 <div className="input-group">
//                   <textarea name="notes" value={formData.notes} placeholder='Add Notes' onChange={handleInputChange} />
//                 </div>
//                 <div className="input-group calculator-display">
//                   <div className="calculator-display">{calcInput}&nbsp;
//                       <FaBackspace style={{width:'24px', height:'3rem', paddingTop:'10px'}} onClick={() => handleCalcButtonClick('Backspace')}/> {/* You can use a different icon or text if preferred */}
//                   </div>
//                 </div>
//                 <div className="calculator">
//                   {['+', '7', '8', '9', '-', '4', '5', '6', '*', '1', '2', '3', '/', '0', '.', '='].map((btn) => (
//                     <button
//                       type="button"
//                       key={btn}
//                       className={btn === '=' ? 'equal' : ['+', '-', '*', '/'].includes(btn) ? 'operation' : 'number'}
//                       onClick={() => handleCalcButtonClick(btn)}
//                     >
//                       {btn}
//                     </button>
//                   ))}
//                   {/* <button
//                     type="button"
//                     className="clear"
//                     onClick={() => handleCalcButtonClick('C')}
//                   >
//                     C
//                   </button> */}
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboardnavbar from "../app_components/Navbar";
import { FaBackspace } from "react-icons/fa";

function Dashboard() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null); // Track selected transaction
  const [showTransactionPopup, setShowTransactionPopup] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [formData, setFormData] = useState({
    account: '',
    category: '',
    notes: '',
    amount: '',
    transaction_date: '', // Add date
    transaction_time: ''  // Add time
  });
  const [accounts, setAccounts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [calcInput, setCalcInput] = useState('0');
  const [selectedMonthYear, setSelectedMonthYear] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  });
  const [allCategories, setAllCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Set initial date and time
    const now = new Date();
    setFormData(prevData => ({
      ...prevData,
      transaction_date: now.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' }).split('/').reverse().map(part => part.padStart(2, '0')).join('-'), // YYYY-MM-DD format
      transaction_time: now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: false }) // HH:MM format
      // const istDate = new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });
      // const istTime = new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: false });
      // const formattedDate = istDate.split('/').reverse().join('-');
    }));
  }, [showPopup]);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    
    if (event.target.value === 'Expense') {
      // Filter and show only expense categories
      setCategories(allCategories.filter(category => category.type_of_category === 'Expense'));
    } else if (event.target.value === 'Income') {
      // Filter and show only income categories
      setCategories(allCategories.filter(category => category.type_of_category === 'Income'));
    } else if (event.target.value === 'Transfer') {
      // Show all categories for transfers
      setCategories(allCategories);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');

      try {
        // const resMetadata = await fetch('http://localhost:8000/get-metadata', {
        //   headers: {
        //     'Authorization': `Bearer ${token}`
        //   }
        // });

        // if (resMetadata.status === 403) {
        //   navigate('/signin');
        //   return;
        // }

        // const metadata = await resMetadata.json();
        // setAccounts(metadata.accounts || []);
        // setCategories(metadata.categories || []);

        // Fetch transactions for the logged-in user and selected month-year
        const resTransactions = await fetch(`http://localhost:8000/get-transactions?monthYear=${selectedMonthYear}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (resTransactions.status === 403) {
          navigate('/signin');
          return;
        }

        const transactionData = await resTransactions.json();
        setTransactions(Array.isArray(transactionData) ? transactionData : []);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedMonthYear, showPopup, navigate]);

  const handleMonthYearChange = (e) => {
    setSelectedMonthYear(e.target.value); // This should be in YYYY-MM format
  };

  const handleTransactionClick = (transaction) => {
    setSelectedTransaction(transaction);
    setShowTransactionPopup(true);
  };

  const handlePopupOpen = async () => {
    const token = localStorage.getItem('token');

    try {
      // Fetch accounts and categories metadata
      const resMetadata = await fetch('http://localhost:8000/get-metadata', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(formData.transaction_date)
      if (resMetadata.status === 403) {
        navigate('/signin'); // Redirect to sign-in if token is expired/invalid
        return;
      }

      const metadata = await resMetadata.json();
    
      setAccounts(metadata.accounts || []);
    
      // Set categories
      const filteredCategories = metadata.categories.filter(category => category.type_of_category === 'Expense');
      setAllCategories(metadata.categories || []);
      setCategories(filteredCategories || []); // Default to expense categories
    } catch (error) {
      console.error("Error fetching metadata:", error);
    } 
    setShowPopup(true);
    setSelectedType('Expense');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };  

  const handleCalcButtonClick = useCallback((value) => {
    if (value === 'C') {
      setCalcInput('0');
    } else if (value === '=' || value === 'Enter') {
      try {
        setCalcInput(eval(calcInput).toString());
      } catch {
        setCalcInput('0');
      }
    } else if (value === 'Backspace') {
      setCalcInput(calcInput.slice(0, -1) || '0');
    } else {
      setCalcInput(calcInput === '0' ? value.toString() : calcInput + value);
    }
  }, [calcInput]);  // Dependency on calcInput  

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if the focus is not on the notes field
      if (document.activeElement.name === 'amount' || document.activeElement.type === 'button') {
        if (/^[0-9+\-*/.]$/.test(event.key)) {
          handleCalcButtonClick(event.key);
        } else if (event.key === 'Enter' || event.key === '=') {
          handleCalcButtonClick('=');
        } else if (event.key === 'Backspace') {
          handleCalcButtonClick('Backspace');
        } else if (event.key === 'Escape') {
          handleCalcButtonClick('C');
        }
      }
    };
  
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleCalcButtonClick]);
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    // const istDate = new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });
    // const istTime = new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: false });
    // const formattedDate = istDate.split('/').reverse().join('-');

    const transaction = {
      account_id: formData.account,
      category_id: formData.category,
      notes: formData.notes,
      type_of_transaction: selectedType,
      amount: calcInput,
      // transaction_date: formData.transaction_date.split('/').reverse().join('-'), // Use formData for date
      transaction_date: formData.transaction_date, // Use formData for date
      transaction_time: formData.transaction_time  // Use formData for time
    };

    try {
      const res = await fetch('http://localhost:8000/save-transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(transaction)
      });

      if (res.status === 403) {
        navigate('/signin');
        return;
      }

      if (res.ok) {
        setShowPopup(false);
        setFormData({
          account: '',
          category: '',
          notes: '',
          amount: '',
          // transaction_date: '',  // Reset date
          // transaction_time: ''   // Reset time
        });
        setCalcInput('0');
        // setSelectedMonthYear('');  // Reset the month-year filter
        // Force a re-fetch by updating the state
        setSelectedMonthYear(formData.transaction_date.split('-').slice(0, 2).join('-'),);
      }
    } catch (error) {
      console.error("Error saving transaction:", error);
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`http://localhost:8000/delete-transaction/${selectedTransaction.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (res.status === 403) {
        navigate('/signin');
        return;
      }

      if (res.ok) {
        setShowTransactionPopup(false);
        setTransactions(transactions.filter(tx => tx.id !== selectedTransaction.id));
      }
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  const handleOverlayClick = (e) => {
    // Close the popup if the clicked target is the overlay
    if (e.target.classList.contains('popup-overlay')) {
      setShowTransactionPopup(false);
      setShowPopup(false);
    }
};

  // Sort transactions by date, with the latest date first
const sortedTransactions = transactions.sort((a, b) => new Date(b.transaction_date) - new Date(a.transaction_date));

  // Group transactions by date
  const groupedTransactions = sortedTransactions.reduce((groups, transaction) => {
    const date = transaction.transaction_date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(transaction);
    return groups;
  }, {});


  return (
    <div className="dashboard-container">
      <Dashboardnavbar />
      <main className="main-content">
        <header className="dashboard-header">
          <div className="header-title">
            <input type="month" value={selectedMonthYear} placeholder='' onChange={handleMonthYearChange} />
          </div>
          <div className="header-totals">
            <div className="total-item">
              <p>EXPENSE</p>
              <p className="amount expense">
                {transactions.reduce((sum, tx) => tx.type_of_transaction === 'Expense' ? sum + parseFloat(tx.amount) : sum, 0)}
              </p>
            </div>
            <div className="total-item">
              <p>INCOME</p>
              <p className="amount income">
                {transactions.reduce((sum, tx) => tx.type_of_transaction === 'Income' ? sum + parseFloat(tx.amount) : sum, 0)}
              </p>
            </div>
            <div className="total-item">
              <p>TOTAL</p>
              <p className="amount total">
                {/* {transactions.reduce((sum, tx) => sum + parseFloat(tx.amount), 0)} */}
                {transactions.reduce((sum, tx) => {
                  if (tx.type_of_transaction === 'Income') {
                    return sum + parseFloat(tx.amount);
                  } else if (tx.type_of_transaction === 'Expense') {
                    return sum - parseFloat(tx.amount);
                  }
                  return sum;
                }, 0)}
              </p>
            </div>
          </div>
        </header>
        <section className="transaction-list">
          {/* {Object.keys(groupedTransactions).map(date => (
            <table key={date} className="transaction-group">
              <h3 className="transaction-date">{date}</h3>
              {groupedTransactions[date].map((transaction, index) => (
                <div key={index} className="transaction">
                  <p className="transaction-title">{transaction.category_name || transaction.notes}</p>
                  <p className="transaction-type">{transaction.account_name || transaction.type_of_transaction}</p>
                  <p className={`transaction-amount ${transaction.type_of_transaction === 'Expense' ? 'expense' : 'income'}`}>
                    {transaction.amount}
                  </p>
                </div>
              ))}
            </table>
          ))} */}
          {Object.keys(groupedTransactions).map(date => (
            <table key={date} className="transaction-group">
              <thead>
                <tr>
                  <th colSpan="3" className="transaction-date">{date}</th>
                </tr>
              </thead>
              <tbody>
                {groupedTransactions[date].map((transaction, index) => (
                  <tr key={index} className="transaction" onClick={() => handleTransactionClick(transaction)}>
                    <td className="transaction-title">{transaction.category_name || transaction.notes}</td>
                    <td className="transaction-type">{transaction.account_name || transaction.type_of_transaction}</td>
                    <td className={`transaction-amount ${transaction.type_of_transaction === 'Expense' ? 'expense' : 'income'}`}>
                      {transaction.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </section>
      </main>
      <button className="add-transaction-btn" onClick={handlePopupOpen}>+</button>

      {showPopup && (
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className="popup">
            {/* Popup form */}
            <div className="popup-header">
              <button type="button" className="popup-close" onClick={() => setShowPopup(false)}>X Cancel</button>
              <button type="button" className="popup-save" onClick={handleSubmit}>✔ Save</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="popup-body">
                <div className="add-transaction-type">
                  <label>
                    <input
                      type="radio"
                      name="transactionType"
                      value="Income"
                      checked={selectedType === 'Income'}
                      onChange={handleTypeChange}
                      className="transaction-type-radio"
                    />
                    <span className={`transaction-type-btn ${selectedType === 'Income' ? 'active' : ''}`}>INCOME</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="transactionType"
                      value="Expense"
                      checked={selectedType === 'Expense'}
                      onChange={handleTypeChange}
                      className="transaction-type-radio"
                    />
                    <span className={`transaction-type-btn ${selectedType === 'Expense' ? 'active' : ''}`}>EXPENSE</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="transactionType"
                      value="TRANSFER"
                      checked={selectedType === 'TRANSFER'}
                      onChange={handleTypeChange}
                      className="transaction-type-radio"
                    />
                    <span className={`transaction-type-btn ${selectedType === 'TRANSFER' ? 'active' : ''}`}>TRANSFER</span>
                  </label>
                </div>
                <div className="input-group-wrapper">
                  <div className="input-group">
                    <label>Account</label>
                    <select name="account" value={formData.account} onChange={handleInputChange}>
                      <option value="">Select Account</option>
                      {accounts.map(account => (
                        <option key={account.id} value={account.id}>{account.account_name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="input-group">
                    <label>Category</label>
                    <select name="category" value={formData.category} onChange={handleInputChange}>
                      <option value="">Select Category</option>
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.category_name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className='input-group-wrapper'>
                  <div className="input-group">
                    <label htmlFor="transaction_date">Transaction Date</label>
                    <input
                      type="date"
                      id="transaction_date"
                      name="transaction_date"
                      value={formData.transaction_date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="transaction_time">Transaction Time</label>
                    <input
                      type="time"
                      id="transaction_time"
                      name="transaction_time"
                      value={formData.transaction_time}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="input-group">
                  <textarea name="notes" value={formData.notes} placeholder='Add Notes' onChange={handleInputChange} />
                </div>
                <div className="input-group calculator-display">
                    {/* <input
                      type="number"
                      step="any"
                      value={calcInput}
                      onChange={(e) => setCalcInput(parseFloat(e.target.value) || '')}
                      placeholder="Enter amount"
                    /><div> */}
                      <label htmlFor='amount'>
                        Amount
                        &nbsp;
                        &nbsp;
                        &nbsp;
                      </label>
                      <div>
                        <input className='calculator-display-input'
                          type="text"
                          name="amount"
                          value={calcInput}
                          readOnly
                        />
                    <FaBackspace style={{ width: '24px', height: '3rem', paddingTop: '10px' }} onClick={() => handleCalcButtonClick('Backspace')} />
                    </div>
                </div>
                <div className="calculator">
                  {['+', '7', '8', '9', '-', '4', '5', '6', '*', '1', '2', '3', '/', '0', '.', '='].map((btn) => (
                    <button
                      type="button"
                      key={btn}
                      className={btn === '=' ? 'equal' : ['+', '-', '*', '/'].includes(btn) ? 'operation' : 'number'}
                      onClick={() => handleCalcButtonClick(btn)}
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {showTransactionPopup && selectedTransaction && (
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className="popup">
            <div className="popup-header">
              <button className="popup-close" onClick={() => setShowTransactionPopup(false)}>X Close</button>
              <button className="popup-delete" onClick={handleDelete}>Delete</button>
            </div>
            <div className="popup-body">
              <table>
                <tbody>
                  <tr>
                    <td><strong>Type:</strong></td> <td>{selectedTransaction.type_of_transaction}</td>
                  </tr>
                  <tr>
                    <td><strong>Account:</strong></td> <td>{selectedTransaction.account_name}</td>
                  </tr>
                  <tr>
                    <td><strong>Category:</strong></td> <td>{selectedTransaction.category_name}</td>
                  </tr>
                  <tr>
                    <td><strong>Notes:</strong></td> <td>{selectedTransaction.notes || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td><strong>Date:</strong></td> <td>{selectedTransaction.transaction_date}</td>
                  </tr>
                  <tr>
                    <td><strong>Time:</strong></td> <td>{selectedTransaction.transaction_time}</td>
                  </tr>
                  <tr>
                    <td><strong>Amount:</strong></td> <td>{selectedTransaction.amount}</td>
                  </tr>
                </tbody>
              </table>
              {/* <p><strong>Type:</strong> {selectedTransaction.type_of_transaction}</p>
              <p><strong>Account:</strong> {selectedTransaction.account_name}</p>
              <p><strong>Category:</strong> {selectedTransaction.category_name}</p>
              <p><strong>Notes:</strong> {selectedTransaction.notes || 'N/A'}</p>
              <p><strong>Date:</strong> {selectedTransaction.transaction_date}</p>
              <p><strong>Time:</strong> {selectedTransaction.transaction_time}</p>
              <p><strong>Amount:</strong> {selectedTransaction.amount}</p> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
// import Dashboardnavbar from "../app_components/Navbar";
// import { FaBackspace } from "react-icons/fa";

// function Dashboard() {
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedType, setSelectedType] = useState('EXPENSE'); // Default selected type
//   const [formData, setFormData] = useState({
//     account: '',
//     category: '',
//     notes: '',
//     amount: '',
//     // date: '',
//     // time: ''
//   });
//   const [accounts, setAccounts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [transactions, setTransactions] = useState([]);
//   const [calcInput, setCalcInput] = useState('0');

//   const navigate = useNavigate();

//   const handleTypeChange = (event) => {
//     setSelectedType(event.target.value);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const token = localStorage.getItem('token');

//       try {
//         // Fetch accounts and categories
//         const resMetadata = await fetch('http://localhost:8000/get-metadata', {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });

//         if (resMetadata.status === 403) {
//           navigate('/signin'); // Redirect to sign-in if token is expired/invalid
//           return;
//         }

//         const metadata = await resMetadata.json();
//         setAccounts(metadata.accounts || []);
//         setCategories(metadata.categories || []);

//         // Fetch transactions for the logged-in user
//         const resTransactions = await fetch('http://localhost:8000/get-transactions', {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });

//         if (resTransactions.status === 403) {
//           navigate('/signin'); // Redirect to sign-in if token is expired/invalid
//           return;
//         }

//         const transactionData = await resTransactions.json();
//         setTransactions(Array.isArray(transactionData) ? transactionData : []); // Ensure it's an array

//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [navigate]);

//   // useEffect(() => {
//   //   const handleKeyPress = (event) => {
//   //     const { key } = event;
//   //     if (!isNaN(key) || ['+', '-', '*', '/', '.', 'Enter', 'Backspace', 'Delete', 'Escape'].includes(key)) {
//   //       handleCalcButtonClick(key);
//   //     }
//   //   };

//   //   document.addEventListener('keydown', handleKeyPress);
//   //   return () => {
//   //     document.removeEventListener('keydown', handleKeyPress);
//   //   };
//   // }, [calcInput]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCalcButtonClick = (value) => {
//     if (value === 'C' || value === 'Escape') {
//       setCalcInput('0');
//     } else if (value === '=' || value === 'Enter') {
//       try {
//         setCalcInput(eval(calcInput).toString());
//       } catch {
//         setCalcInput('0');
//       }
//     } else if (value === 'Backspace' || value === 'Delete') {
//       setCalcInput(calcInput.slice(0, -1) || '0');
//     } else {
//       setCalcInput(calcInput === '0' ? value.toString() : calcInput + value);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');
//     // Convert to IST (Indian Standard Time)
//     const istDate = new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })
//     const istTime = new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' , hour12: false });

//     // Format date to YYYY-MM-DD
//     const formattedDate = istDate.split('/').reverse().join('-');

//     const transaction = {
//       account_id: formData.account, // ensure this is the ID, not the name
//       category_id: formData.category, // ensure this is the ID, not the name
//       notes: formData.notes,
//       type_of_transaction: selectedType,
//       amount: calcInput,
//       // transaction_date: ISTDate.toISOString().split('T')[0], // set date in IST
//       // transaction_time: ISTDate.toTimeString().split(' ')[0]  // set time in IST in HH:mm:ss format
//       // transaction_date: new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' }),
//       // transaction_time: new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' })
//       transaction_date: formattedDate, // Set date in YYYY-MM-DD format
//       transaction_time: istTime // Set time in 24-hour format
//     };

//     try {
//       const res = await fetch('http://localhost:8000/save-transaction', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify(transaction)
//       });

//       if (res.status === 403) {
//         navigate('/signin'); // Redirect to sign-in if token is expired/invalid
//         return;
//       }

//       if (res.ok) {
//         setShowPopup(false);
//         setFormData({
//           account: '',
//           category: '',
//           notes: '',
//           amount: '',
//           date: '',
//           time: ''
//         });
//         setCalcInput('0');

//         // Refresh transactions after saving
//         const transactionRes = await fetch('http://localhost:8000/get-transactions', {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
//         const transactionData = await transactionRes.json();
//         setTransactions(Array.isArray(transactionData) ? transactionData : []); // Ensure it's an array
//       }
//     } catch (error) {
//       console.error("Error saving transaction:", error);
//     }
//   };


//   return (
//     <div className="dashboard-container">
//       <Dashboardnavbar />
//       <main className="main-content">
//         <header className="dashboard-header">
//           <div className="header-title">
//             <input type="month" value="2024-06" />
//           </div>
//           <div className="header-totals">
//             <div className="total-item">
//               <p>EXPENSE</p>
//               <p className="amount expense">
//                 {transactions.reduce((sum, tx) => tx.type_of_transaction === 'Expense' ? sum + parseFloat(tx.amount) : sum, 0)}
//               </p>
//             </div>
//             <div className="total-item">
//               <p>INCOME</p>
//               <p className="amount income">
//                 {transactions.reduce((sum, tx) => tx.type_of_transaction === 'Income' ? sum + parseFloat(tx.amount) : sum, 0)}
//               </p>
//             </div>
//             <div className="total-item">
//               <p>TOTAL</p>
//               <p className="amount total">
//                 {transactions.reduce((sum, tx) => sum + parseFloat(tx.amount), 0)}
//               </p>
//             </div>
//           </div>
//         </header>
//         <section className="transaction-list">
//           {transactions.map((transaction, index) => (
//             <table key={`transaction-${index}`} className="transaction-group">
//               <thead>
//                 <tr>
//                   <th colSpan="3" className="transaction-date">{transaction.transaction_date}</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="transaction">
//                   <td className="transaction-title">{transaction.category_name || transaction.notes}</td>
//                   <td className="transaction-type">{transaction.account_name || transaction.type_of_transaction}</td>
//                   <td className={`transaction-amount ${transaction.type_of_transaction === 'Expense' ? 'expense' : 'income'}`}>
//                     {transaction.amount}
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           ))}
//         </section>
//       </main>
//       <button className="add-transaction-btn" onClick={() => setShowPopup(true)}>+</button>

//       {showPopup && (
//         <div className="popup-overlay">
//           <div className="popup">
//             <div className="popup-header">
//               <button type="button" className="popup-close" onClick={() => setShowPopup(false)}>X Cancel</button>
//               <button type="button" className="popup-save" onClick={handleSubmit}>✔ Save</button>
//             </div>
//             <form onSubmit={handleSubmit}>
//               <div className="popup-body">
//                 <div className="add-transaction-type">
//                   <label>
//                     <input
//                       type="radio"
//                       name="transactionType"
//                       value="INCOME"
//                       checked={selectedType === 'INCOME'}
//                       onChange={handleTypeChange}
//                       className="transaction-type-radio"
//                     />
//                     <span className={`transaction-type-btn ${selectedType === 'INCOME' ? 'active' : ''}`}>INCOME</span>
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       name="transactionType"
//                       value="EXPENSE"
//                       checked={selectedType === 'EXPENSE'}
//                       onChange={handleTypeChange}
//                       className="transaction-type-radio"
//                     />
//                     <span className={`transaction-type-btn ${selectedType === 'EXPENSE' ? 'active' : ''}`}>EXPENSE</span>
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       name="transactionType"
//                       value="TRANSFER"
//                       checked={selectedType === 'TRANSFER'}
//                       onChange={handleTypeChange}
//                       className="transaction-type-radio"
//                     />
//                     <span className={`transaction-type-btn ${selectedType === 'TRANSFER' ? 'active' : ''}`}>TRANSFER</span>
//                   </label>
//                 </div>
//                 <div className="input-group-wrapper">
//                   <div className="input-group">
//                     <label>Account</label>
//                     <select name="account" value={formData.account} onChange={handleInputChange}>
//                       <option value="">Select Account</option>
//                       {accounts.map(account => (
//                         <option key={account.id} value={account.id}>{account.account_name}</option>
//                       ))}
//                     </select>
//                   </div>
//                   <div className="input-group">
//                     <label>Category</label>
//                     <select name="category" value={formData.category} onChange={handleInputChange}>
//                       <option value="">Select Category</option>
//                       {categories.map(category => (
//                         <option key={category.id} value={category.id}>{category.category_name}</option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>

//                 <div className="input-group">
//                   <textarea name="notes" value={formData.notes} placeholder='Add Notes' onChange={handleInputChange} />
//                 </div>
//                 <div className="input-group calculator-display">
//                   <div className="calculator-display">{calcInput}&nbsp;
//                     <FaBackspace style={{ width: '24px', height: '3rem', paddingTop: '10px' }} onClick={() => handleCalcButtonClick('Backspace')} />
//                   </div>
//                 </div>
//                 <div className="calculator">
//                   {['+', '7', '8', '9', '-', '4', '5', '6', '*', '1', '2', '3', '/', '0', '.', '='].map((btn) => (
//                     <button
//                       type="button"
//                       key={btn}
//                       className={btn === '=' ? 'equal' : ['+', '-', '*', '/'].includes(btn) ? 'operation' : 'number'}
//                       onClick={() => handleCalcButtonClick(btn)}
//                     >
//                       {btn}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;
