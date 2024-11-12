//import React from 'react';
//import SideMenu from "../components/SideMenu/SideMenu";

/*const Home = () => {
  
  return (
    <div style={{ position: "absolute", top: "150px", left: "450px" }}>
      Page Home
    </div>
  )
}

export default Home*/


/*const Home = () => {
  return (
    <div className={PageId}>
      <h1 className='title'>Home Page</h1>
      <div className="container">
      </div>
    </div>
  );
}

export default Home;*/

/*
  - h1 : page title
  - div : page component container
 */

import React from 'react';
import styles from "./Home.module.css"
import { FaCalculator, FaCalendarAlt } from "react-icons/fa";
import {Line, Bar, Pie } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend} from "chart.js"
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);
import { Doughnut } from 'react-chartjs-2';

const BarGraph = () => {
  const BarChartData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Fiday",
      "Saturday",
      "Sunday"
    ],
    datasets: [
      {
        label: "Steps",
        data: [3000, 4000, 5000, 6000, 7000, 8000, 9000],
        backgroundColor: ["rgb(2, 54, 187)"],
        borderColor: ["rgb(2, 54, 187)"],
        borderWidth: 1,
      }
    ]
  };
  const options = {responsive: true, plugins: {title: {display:true, text:"Events"}}};
  return <Bar options={options} data={BarChartData}/>;
};

const LineGraph = () => {
  const LineChartData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Fiday",
      "Saturday",
      "Sunday"
    ],
    datasets: [
      {
        label: "Steps",
        data: [3000, 4000, 5000, 6000, 7000, 8000, 9000],
        borderColor: "rgb(2, 54, 187)"
      }
    ]
  };
  const options = {responsive: true, plugins: {title: {display:true, text:"Customers overview"}}};
  return <Line options={options} data={LineChartData}/>;
};

const PieGraph = () => {
  const PieChartData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Fiday",
      "Saturday",
      "Sunday"
    ],
    datasets: [
      {
        label: "Steps",
        data: [3000, 4000, 5000, 6000, 7000, 8000, 9000],
        backgroundColor: ["rgb(2, 54, 187)", "red", "yellow", "green", "orange", "purple", "brown"]
      }
    ]
  };
  const options = {responsive: true, plugins: {title: {display:true, text:"Meetings top sources"}}};
  return <Doughnut options={options} data={PieChartData}/>;
};

const Home = () => {
  return (
    <div className={styles.container}>                                                                                                                                                                                                                                                                                                                                                                                                                                                      
      <div className={styles.headContainer}>                                                                                                                                                                                                                                                                                                                                                                                                                                                
        <div className="rightSide">                                                                                                                                                                                                                                                                                                                                                                                                                                                         
          <h1>Dashboard</h1>                                                                                                                                                                                                                                                                                                                                                                                                                                                                
          <span>Welcome!</span>                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        <div className={styles.leftSide}>                                                                                                                                                                                                                                                                                                                                                                                                                                                   
          <button className={styles.last}><FaCalendarAlt/>Last 30 days</button>                                                                                                                                                                                                                                                                                                                                                                                                             
          <button className={styles.Report}><FaCalculator/>Report</button>                                                                                                                                                                                                                                                                                                                                                                                                                  
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
      <div className={styles.mainContainer}>                                                                                                                                                                                                                                                                                                                                                                                                                                                
        <div className={styles.chartCard}><LineGraph/></div>                                                                                                                                                                                                                                                                                                                                                                                                                                
        <div className={styles.chartCard}><BarGraph/></div>                                                                                                                                                                                                                                                                                                                                                                                                                                 
        <div className={styles.chartCard}></div>                                                                                                                                                                                                                                                                                                                                                                                                                                            
        <div className={styles.chartCard}><PieGraph/></div>                                                                                                                                                                                                                                                                                                                                                                                                                                 
      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    </div>
  );
}

export default Home;
