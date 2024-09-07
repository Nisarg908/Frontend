// import React from 'react';
// import Dashboardnavbar from "../app_components/Navbar";
// import { Pie } from 'react-chartjs-2';
// import 'chart.js/auto';

// function Analysis() {
//   const data = {
//     labels: ['Bills', 'Clothing', 'Entertainment', 'Food'],
//     datasets: [
//       {
//         data: [68.97, 13.79, 13.79, 3.45],
//         backgroundColor: ['#FF0000', '#FFD700', '#800080', '#008000'],
//         hoverBackgroundColor: ['#FF0000', '#FFD700', '#800080', '#008000'],
//         borderWidth: 0
//       }
//     ]
//   };

//   const options = {
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false, // Disable the default legend
//       },
//     }
//   };

//   // Mapping data to create legend and bars
//   const { labels, datasets } = data;
//   const [dataset] = datasets; // Since we have only one dataset

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
//               <p className="amount expense">₹14500</p>
//             </div>
//             <div className="total-item">
//               <p>INCOME</p>
//               <p className="amount income">₹150000</p>
//             </div>
//             <div className="total-item">
//               <p>TOTAL</p>
//               <p className="amount total">₹135500</p>
//             </div>
//           </div>
//         </header>
//         <h3>Expense Overview</h3>
//         <section className="expense-overview">
//           <div className='flexer'>
//             <div className="chart-container">
//               <Pie data={data} options={options} />
//             </div>
//             <div className="legend">
//               {labels.map((label, index) => (
//                 <div key={index} className="legend-item">
//                   <span
//                     className="legend-color"
//                     style={{ backgroundColor: dataset.backgroundColor[index] }}
//                   ></span>
//                   {label}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//         <div className="expense-bars">
//           {labels.map((label, index) => (
//             <div key={index} className="expense-bar">
//               <span className="bar-label">{label}</span>
//               <div className="bar">
//                 <div
//                   className="fill"
//                   style={{ width: `${dataset.data[index]}%`, backgroundColor: dataset.backgroundColor[index] }}
//                 ></div>
//               </div>
//               <span className="bar-percentage">{dataset.data[index]}%</span>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Analysis;

// import React from 'react';
// import Dashboardnavbar from "../app_components/Navbar";
// import { Doughnut } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import 'chart.js/auto';

// ChartJS.register(ArcElement, Tooltip, Legend);

// function Analysis() {
//   const data = {
//     labels: ['Bills', 'Clothing', 'Entertainment', 'Food'],
//     datasets: [
//       {
//         data: [68.97, 13.79, 13.79, 3.45],
//         backgroundColor: ['#FF0000', '#FFD700', '#800080', '#008000'],
//         hoverBackgroundColor: ['#FF0000', '#FFD700', '#800080', '#008000'],
//         borderWidth: 0
//       }
//     ]
//   };

//   const options = {
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false, // Disable the default legend
//       },
//     //   tooltip: {
//     //     callbacks: {
//     //       label: function (tooltipItem) {
//     //         const dataset = tooltipItem.dataset;
//     //         const currentValue = dataset.data[tooltipItem.dataIndex];
//     //         const label = dataset.labels[tooltipItem.dataIndex];
//     //         return `${label}: ${currentValue}%`;
//     //       },
//     //     },
//     //   },
//     },
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
//               <p className="amount expense">₹14500</p>
//             </div>
//             <div className="total-item">
//               <p>INCOME</p>
//               <p className="amount income">₹150000</p>
//             </div>
//             <div className="total-item">
//               <p>TOTAL</p>
//               <p className="amount total">₹135500</p>
//             </div>
//           </div>
//         </header>
//         <h3>Expense Overview</h3>
//         <section className="expense-overview">
//           <div className='flexer'>
//             <div className="chart-container" style={{ position: 'relative', width: '50%', height: '250px' }}>
//               <Doughnut data={data} options={options} />
//             </div>
//             <div className="legend">
//               {data.labels.map((label, index) => (
//                 <div key={index} className="legend-item">
//                   <span
//                     className="legend-color"
//                     style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
//                   ></span>
//                   {label}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//         <div className="expense-bars">
//           {data.labels.map((label, index) => (
//             <div key={index} className="expense-bar">
//               <span className="bar-label">{label}</span>
//               <div className="bar">
//                 <div
//                   className="fill"
//                   style={{ width: `${data.datasets[0].data[index]}%`, backgroundColor: data.datasets[0].backgroundColor[index] }}
//                 ></div>
//               </div>
//               <span className="bar-percentage">{data.datasets[0].data[index]}%</span>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Analysis;

import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboardnavbar from "../app_components/Navbar";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';

ChartJS.register(ArcElement, Tooltip, Legend);

function Analysis() {
  const [chartData, setChartData] = useState(null);
  const [monthYear, setMonthYear] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  }); // Default to current month/year
  console.log(monthYear)
  const [transactionType, setTransactionType] = useState("Expense"); // Default to Expense
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');

      try {
        // Fetch transactions for the logged-in user and selected month-year
        const resTransactions = await fetch(`http://localhost:8000/get-transactions?monthYear=${monthYear}`, {
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
  }, [monthYear, navigate]);

  const fetchCategorySummary = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8000/get-category-summary?monthYear=${monthYear}&type_of_transaction=${transactionType}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        // params: {
        //   monthYear,
        //   type_of_transaction: transactionType
        // }
      });
      console.log(response);
      // const categories = response.data.map(item => item.category_name);
      // const amounts = response.data.map(item => item.total_amount);
      // const colors = categories.map(() => `#${Math.floor(Math.random()*16777215).toString(16)}`);
      const data = await response.json(); // Assuming the response is in JSON format
      const categories = data.map(item => item.category_name);
      const amounts = data.map(item => item.total_amount);
      const colors = categories.map(() => `#${Math.floor(Math.random()*16777215).toString(16)}`);

      setChartData({
        labels: categories,
        datasets: [
          {
            data: amounts,
            backgroundColor: colors,
            hoverBackgroundColor: colors,
            borderWidth: 0
          }
        ]
      });

    } catch (error) {
      console.error("Error fetching category summary:", error);
    }
  }, [monthYear, transactionType]);

  useEffect(() => {
    fetchCategorySummary();
  }, [fetchCategorySummary]);

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="dashboard-container">
      <Dashboardnavbar />
      <main className="main-content">
        <header className="dashboard-header">
          <div className="header-title">
            <input 
              type="month" 
              value={monthYear} 
              onChange={(e) => setMonthYear(e.target.value)} 
            />
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
        <div className="toggle-buttons">
          <button 
            onClick={() => setTransactionType("Expense")} 
            className={transactionType === "Expense" ? "active" : ""}
          >
            Expense Overview
          </button>
          <button 
            onClick={() => setTransactionType("Income")} 
            className={transactionType === "Income" ? "active" : ""}
          >
            Income Overview
          </button>
        </div>
        {chartData && (
          <>
            <h3>{transactionType} Overview</h3>
            <section className="expense-overview">
              <div className='flexer'>
                <div className="chart-container" style={{ position: 'relative', width: '50%', height: '250px' }}>
                  <Doughnut data={chartData} options={options} />
                </div>
                <div className="legend">
                  {chartData.labels.map((label, index) => (
                    <div key={index} className="legend-item">
                      <span
                        className="legend-color"
                        style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}
                      ></span>
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <div className="expense-bars">
              {chartData.labels.map((label, index) => (
                <div key={index} className="expense-bar">
                  <span className="bar-label">{label}</span>
                  <div className="bar">
                    <div
                      className="fill"
                      style={{ 
                        width: `${(chartData.datasets[0].data[index] / chartData.datasets[0].data.reduce((a, b) => a + b, 0)) * 100}%`, 
                        backgroundColor: chartData.datasets[0].backgroundColor[index] 
                      }}
                    ></div>
                  </div>
                  <span className="bar-percentage">{chartData.datasets[0].data[index]}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default Analysis;

