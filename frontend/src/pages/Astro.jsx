// import React from "react";
// import { useState } from "react";
// // import { reqBackend } from "../utils/reqBackend";
// import { useEffect } from "react";

// // import {
// //     // FaAries,
// //  FaTaurus,
// //     // FaGemini,
// //     // FaCancer,
// //     // FaLeo,
// //     // FaVirgo,
// //     // FaLibra,
// //     // FaScorpio,
// //     // FaSagittarius,
// //     // FaCapricorn,
// //     // FaAquarius,
// //     // FaPisces,
// // } from "react-icons/fa";

// const Astro = () => {
//   //   let customers = [
//   //     ["John", "28", "M", "Taurus"],
//   //     ["Martin", "32", "M", "Aries"],
//   //     ["Sarah", "25", "F", "Leo"],
//   //     ["Naomie", "22", "F", "Scorpio"],
//   //     ["Alex", "30", "M", "Capricorn"],
//   //     ["Emma", "24", "F", "Gemini"],
//   //     ["Lucas", "27", "M", "Virgo"],
//   //     ["Sophia", "21", "F", "Cancer"],
//   //     ["Daniel", "29", "M", "Pisces"],
//   //     ["Olivia", "26", "F", "Aquarius"],
//   //     ["Liam", "35", "M", "Sagittarius"],
//   //     ["Ava", "23", "F", "Libra"],
//   //     ["Noah", "31", "M", "Leo"],
//   //     ["Mia", "20", "F", "Aries"],
//   //     ["Ethan", "33", "M", "Scorpio"],
//   //     ["Isabella", "19", "F", "Taurus"]
//   // ];
//   const compatibilite = [
//     ["70", "50", "30", "20", "40", "30", "40", "30", "50", "30", "50", "30"],
//     ["50", "75", "40", "30", "30", "40", "50", "30", "30", "30", "50", "40"],
//     ["30", "40", "60", "20", "30", "30", "40", "20", "50", "30", "50", "30"],
//     ["20", "30", "20", "80", "40", "30", "30", "50", "20", "30", "40", "30"],
//     ["40", "30", "30", "40", "85", "30", "40", "30", "40", "30", "40", "50"],
//     ["30", "40", "30", "30", "30", "70", "40", "40", "30", "40", "50", "30"],
//     ["40", "50", "40", "30", "40", "40", "90", "40", "40", "30", "40", "50"],
//     ["30", "30", "20", "50", "30", "40", "40", "75", "30", "40", "30", "50"],
//     ["50", "30", "50", "20", "40", "30", "40", "30", "80", "30", "40", "50"],
//     ["30", "30", "30", "30", "30", "40", "40", "40", "30", "85", "40", "30"],
//     ["50", "50", "50", "40", "40", "50", "40", "30", "40", "40", "70", "30"],
//     ["30", "40", "30", "50", "50", "30", "50", "50", "50", "30", "30", "80"],
//   ];
//   const signs = [
//     "Aries",
//     "Taurus",
//     "Gemini",
//     "Cancer",
//     "Leo",
//     "Virgo",
//     "Libra",
//     "Scorpio",
//     "Sagittarius",
//     "Capricorn",
//     "Aquarius",
//     "Pisces",
//   ];

//   let [customers, setCustomers] = useState([]);

//   // let customers;
//   let [choice1, updateChoice1] = useState([]);
//   let [choice2, updateChoice2] = useState([]);
//   // let [choice1Sign, updateChoice1Sign] = useState([]);
//   // let [choice2Sign, updateChoice2Sign] = useState([]);
//   let [percentage, updatePercentage] = useState([]);
//   function manageChoices(choice1, choice2, object) {
//     console.log("in manage choice");
//     let randomIndex = Math.floor(Math.random() * signs.length);
//     // updateChoice1(signs[randomIndex]);
//     // updateChoice2(signs[randomIndex])
//     if (choice1.length === 0) {
//       updateChoice1(object);
//       // updateChoice1Sign(signs[randomIndex]);
//     } else if (choice2.length === 0) {
//       updateChoice2(object);
//       // updateChoice2Sign(signs[randomIndex]);
//     }
//   }
//   function clearChoice(choice1, choice2) {
//     console.log("In clear choice");
//     updateChoice1([]);
//     updateChoice2([]);
//     updatePercentage(0);
//   }
//   // function submitCalcul(choice1, choice2) {
//   //   console.log("In submit choice");
//   //   updatePercentage((percentage) => Number((percentage += 1)));
//   // }
//   function submitCalcul(signe1, signe2) {
//     console.log("In submit calcul");
//     const index1 = signs.indexOf(signe1);
//     const index2 = signs.indexOf(signe2);

//     // if (index1 === -1 || index2 === -1) {
//     //   return "Signe invalide";
//     // }
//     updatePercentage(compatibilite[index1][index2]);
//   }
//   async function fetchData() {
//     try {
//       console.log(`requete customers to backend`);
//       const response = await fetch(`http://localhost:3000/customers`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       });
//       let data = await response.json();
//       console.log(`Response:  ${response}`);
//       if (response.ok) {
//         console.log(`customers successful ${response.ok}`);
//         setCustomers(data);
//       } else {
//         console.log(`data: ${data}}`);
//         console.log(`customers unsuccessful ${response.ok}`);
//       }
//       return response;
//     } catch (error) {
//       console.log(`Error occurs during customers: ${error}`);
//     }
//   }
//   useEffect(() => {
//     customers = fetchData();
//   }, []);
//   return (
//     <div>
//       <div style={{ position: "absolute", top: "150px", left: "450px" }}>
//         Page Astro
//       </div>
//       <div>
//         <table
//           style={{
//             display: "block",
//             maxHeight: "700px",
//             overflowY: "auto",
//             position: "absolute",
//             top: "200px",
//             left: "450px",
//             border: "2px solid black",
//           }}
//           className="border-p2"
//         >
//           <thead>
//             <tr style={{ border: "2px solid black" }}>
//               <th style={{ padding: "20px", width: "200px" }}>Name</th>
//               <th style={{ padding: "20px", width: "200px" }}>Surname</th>
//               <th style={{ padding: "20px", width: "200px" }}>email</th>
//             </tr>
//           </thead>
//           <div>
//             <tbody
//               style={{
//                 display: "block",
//                 maxHeight: "700px",
//                 overflowY: "auto",
//               }}
//             >
//               {customers.map((elem, index) => (
//                 <tr
//                   onClick={() => manageChoices(choice1, choice2, elem)}
//                   key={index}
//                   style={{ border: "1px solid black" }}
//                 >
//                   <td
//                     style={{ padding: "20px", width: "200px" }}
//                     className="text-center"
//                   >
//                     {elem.name}
//                   </td>
//                   <td
//                     style={{ padding: "20px", width: "200px" }}
//                     className="text-center"
//                   >
//                     {elem.surname}
//                   </td>
//                   <td
//                     style={{ padding: "20px", width: "200px" }}
//                     className="text-center bg-red"
//                   >
//                     {elem.email}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </div>
//         </table>
//         <p
//           style={{
//             position: "absolute",
//             top: "200px",
//             left: "1500px",
//             width: "50px",
//             height: "25px",
//             fontSize: "80px",
//           }}
//         >
//           {percentage}%
//         </p>
//         <button
//           onClick={() => clearChoice(choice1, choice2)}
//           style={{
//             position: "absolute",
//             top: "300px",
//             left: "1800px",
//             border: "2px solid black",
//             width: "50px",
//             height: "25px",
//           }}
//         >
//           Clear
//         </button>
//         <div
//           id="1st-custom-select"
//           style={{
//             position: "absolute",
//             top: "350px",
//             left: "1200px",
//             border: "2px solid black",
//             width: "250px",
//             height: "250px",
//           }}
//         >
//           <p className="text-center">{choice1.name}</p>
//           <p className="text-center">{choice1.astrological_sign}</p>
//         </div>
//         <div
//           id="2nd-custom-select"
//           style={{
//             position: "absolute",
//             top: "350px",
//             left: "1600px",
//             border: "2px solid black",
//             width: "250px",
//             height: "250px",
//           }}
//         >
//           <p className="text-center">{choice2.name}</p>
//           <p className="text-center">{choice2.astrological_sign}</p>
//         </div>
//         <button
//           onClick={() =>
//             submitCalcul(choice1.astrological_sign, choice2.astrological_sign)
//           }
//           style={{
//             position: "absolute",
//             top: "700px",
//             left: "1430px",
//             border: "2px solid black",
//             width: "200px",
//             height: "25px",
//           }}
//         >
//           Compatibility
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Astro;

import React from "react";
import { useState } from "react";
// import { reqBackend } from "../utils/reqBackend";
import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  Avatar,
  IconButton,
  Typography,
  Button,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
} from "@mui/material";
import "./Astro.css"
// import {
//     // FaAries,
//  FaTaurus,
//     // FaGemini,
//     // FaCancer,
//     // FaLeo,
//     // FaVirgo,
//     // FaLibra,
//     // FaScorpio,
//     // FaSagittarius,
//     // FaCapricorn,
//     // FaAquarius,
//     // FaPisces,
// } from "react-icons/fa";

const Astro = () => {
  // const customers = [
  //   { name: "John", surname: "Doe", email: "john.doe@example.com", astrological_sign: "Aries" },
  //   { name: "Jane", surname: "Smith", email: "jane.smith@example.com", astrological_sign: "Taurus" },
  //   { name: "Michael", surname: "Brown", email: "michael.brown@example.com", astrological_sign: "Gemini" },
  //   { name: "Emily", surname: "Johnson", email: "emily.johnson@example.com", astrological_sign: "Cancer" },
  //   { name: "David", surname: "Williams", email: "david.williams@example.com", astrological_sign: "Leo" },
  //   { name: "Sarah", surname: "Taylor", email: "sarah.taylor@example.com", astrological_sign: "Virgo" },
  // ];  
  const compatibilite = [
    ["70", "50", "30", "20", "40", "30", "40", "30", "50", "30", "50", "30"],
    ["50", "75", "40", "30", "30", "40", "50", "30", "30", "30", "50", "40"],
    ["30", "40", "60", "20", "30", "30", "40", "20", "50", "30", "50", "30"],
    ["20", "30", "20", "80", "40", "30", "30", "50", "20", "30", "40", "30"],
    ["40", "30", "30", "40", "85", "30", "40", "30", "40", "30", "40", "50"],
    ["30", "40", "30", "30", "30", "70", "40", "40", "30", "40", "50", "30"],
    ["40", "50", "40", "30", "40", "40", "90", "40", "40", "30", "40", "50"],
    ["30", "30", "20", "50", "30", "40", "40", "75", "30", "40", "30", "50"],
    ["50", "30", "50", "20", "40", "30", "40", "30", "80", "30", "40", "50"],
    ["30", "30", "30", "30", "30", "40", "40", "40", "30", "85", "40", "30"],
    ["50", "50", "50", "40", "40", "50", "40", "30", "40", "40", "70", "30"],
    ["30", "40", "30", "50", "50", "30", "50", "50", "50", "30", "30", "80"],
  ];
  const signs = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];

  let [customers, setCustomers] = useState([]);

  // let customers;
  let [choice1, updateChoice1] = useState([]);
  let [choice2, updateChoice2] = useState([]);
  let [percentage, updatePercentage] = useState([]);
  function manageChoices(choice1, choice2, object) {
    console.log("in manage choice");
    let randomIndex = Math.floor(Math.random() * signs.length);
    if (choice1.length === 0) {
      updateChoice1(object);
    } else if (choice2.length === 0) {
      updateChoice2(object);
    }
  }
  function clearChoice(choice1, choice2) {
    console.log("In clear choice");
    updateChoice1([]);
    updateChoice2([]);
    updatePercentage(0);
  }
  function submitCalcul(signe1, signe2) {
    console.log("In submit calcul");
    const index1 = signs.indexOf(signe1);
    const index2 = signs.indexOf(signe2);
    updatePercentage(compatibilite[index1][index2]);
  }
  async function fetchData() {
    try {
      console.log(`requete customers to backend`);
      const response = await fetch(`http://localhost:3000/customers`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      let data = await response.json();
      console.log(`Response:  ${response}`);
      if (response.ok) {
        console.log(`customers successful ${response.ok}`);
        setCustomers(data);
      } else {
        console.log(`data: ${data}}`);
        console.log(`customers unsuccessful ${response.ok}`);
      }
      return response;
    } catch (error) {
      console.log(`Error occurs during customers: ${error}`);
    }
  }
  useEffect(() => {
    customers = fetchData();
  }, []);
  return (
    <div>
      {/* <div style={{ position: "absolute", top: "150px", left: "450px" }}>
        Page Astro
      </div> */}
      <div className="titlePage">
        <h1>Page Astro</h1>
      </div>
      <TableContainer
        component={Paper}
        style={{ maxWidth: "700px", width: "700px" }}
      >
        <Table aria-label="coaches table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Surname</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer, index) => (
              <TableRow key={index} onClick={() => manageChoices(choice1, choice2, customer)}>
                <TableCell></TableCell>
                <TableCell>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {/* <Avatar>{customer.name}</Avatar> */}
                    <Typography variant="body1" style={{ marginLeft: "10px" }}>
                      {customer.name}
                    </Typography>
                  </div>
                </TableCell>
                <TableCell>{customer.surname}</TableCell>
                <TableCell>{customer.email}</TableCell>
                {/* <TableCell align="center">
                  {Coachs.customers_ids.length}
                </TableCell> */}
                <TableCell>
                  {/* <IconButton> */}
                    {/* <MoreVertIcon /> */}
                  {/* </IconButton> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p
        style={{
          position: "absolute",
          top: "200px",
          left: "1500px",
          width: "50px",
          height: "25px",
          fontSize: "80px",
        }}
      >
        {percentage}%
      </p>
      <button
        className="addEvent"
        onClick={() => clearChoice(choice1, choice2)}
        style={{
          position: "absolute",
          top: "300px",
          left: "1800px",
          border: "2px solid black",
          width: "100px",
          height: "40px",
        }}
      >
        Clear
      </button>
      <div
        id="1st-custom-select"
        style={{
          position: "absolute",
          top: "350px",
          left: "1200px",
          border: "2px solid black",
          width: "250px",
          height: "250px",
        }}
      >
        <p className="text-center">{choice1.name}</p>
        <p className="text-center">{choice1.astrological_sign}</p>
      </div>
      <div
        id="2nd-custom-select"
        style={{
          position: "absolute",
          top: "350px",
          left: "1600px",
          border: "2px solid black",
          width: "250px",
          height: "250px",
        }}
      >
        <p className="text-center">{choice2.name}</p>
        <p className="text-center">{choice2.astrological_sign}</p>
      </div>
      <button
      className="addEvent"
        onClick={() =>
          submitCalcul(choice1.astrological_sign, choice2.astrological_sign)
        }
        style={{
          position: "absolute",
          top: "700px",
          left: "1430px",
          border: "2px solid black",
          width: "200px",
          height: "50px",
        }}
      >
        Compatibility
      </button>
    </div>
  );
};

export default Astro;
