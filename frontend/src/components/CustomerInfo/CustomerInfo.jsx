// import { Grid, rgbToHex } from "@mui/material"; // Utilisation de la version stable de Grid
// import {
//   Grid2,
//   Paper,
//   Typography,
//   Avatar,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Stack,
//   IconButton,
//   Button,
// } from "@mui/material";
// import "./Customer-info.css";
// import { CiMail } from "react-icons/ci";
// import { RiSaveLine } from "react-icons/ri";

// const CustomerInfo = () => {
//   return (
//     <div>
//       <h1 className="pageTitle">Customer details</h1>
//       <Grid container spacing={2} sx={{ marginTop: 2 }}>
//         <Grid item xl={4}>
//           <Paper className="carteCustomer" elevation={5}>
//             <Grid container direction="column">
//               <Grid
//                 item
//                 className="avatar"
//                 direction="column"
//                 style={{ backgroundColor: "white", border: "1px solid black"}}
//                 xl={12}
//               >
//                 <Avatar
//                   alt="Francis Mitcham"
//                   src="/path/to/image.jpg"
//                   style={{ width: 100, height: 100, marginBottom: "1em" }}
//                 />
//                 <Typography variant="h6">Francis Mitcham</Typography>
//               </Grid>
//               <Grid
//                 item
//                 xl={12}
//                 className="center"
//                 style={{ maxHeight: "100px", backgroundColor: "white", border: "1px solid black"}}
//               >
//                 <CiMail style={{ marginRight: "30px" }} />
//                 <RiSaveLine />
//               </Grid>
//               <Grid
//                 item
//                 xl={12}
//                 className="center"
//                 style={{ maxHeight: "100px", backgroundColor: "white", border: "1px solid black"}}
//                 columnSpacing={30}
//               >
//                 <div>
//                   <Typography variant="h6">23</Typography>
//                   <p>Total Encounters</p>
//                 </div>
//                 <div style={{ marginLeft: "100px", marginRight: "100px" }}>
//                   <Typography variant="h6">20</Typography>
//                   <p>Positives</p>
//                 </div>
//                 <div>
//                   <Typography variant="h6">3</Typography>
//                   <p>In progress</p>
//                 </div>
//               </Grid>
//               <Grid>
//                 <p style={{marginBottom: "20px"}}>Short details:</p>
//                 <Grid>
//                   <p>User ID:</p>
//                   <strong>example id</strong>
//                 </Grid>
//                 <Grid>
//                   <p>Email</p>
//                   <strong>example email</strong>
//                 </Grid>
//                 <Grid>
//                   <p>Adress</p>
//                   <strong>Adress example 1</strong>
//                   <strong>Adress example 2</strong>
//                 </Grid>
//                 <Grid>
//                   <p>Last activity</p>
//                   <strong>15 feb 2024</strong>
//                 </Grid>
//                 <Grid>
//                   <p>Coach</p>
//                   <strong>Nicolas Latourne</strong>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Paper>
//         </Grid>
//         <Grid item xl={8}>
//           <Paper className="containerMeetPay" elevation={5}>
//             Content for the right grid
//           </Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default CustomerInfo;

import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
} from "@mui/material";
import { useParams } from "react-router-dom";

const CustomerDetails = () => {
  let { customerId } = useParams();
  let [customers, setcustomers] = useState([]);
  function positivesMeets(meets) {
    let counter = 0;
    meets.forEach((meet) => {
      if (meet.rating > 3) {
        counter++;
      }
    });
    return counter;
  }
  // let customer = {
  //   id: "303DX902909",
  //   name: "Francis Mitcham",
  //   email: "example@gmail.com",
  //   adress: "adress example",
  //   encounters: [
  //     {
  //       date: "05/07/24",
  //       rating: "5",
  //       comment: "A very good moment",
  //       source: "Dating App",
  //     },
  //     {
  //       date: "05/07/24",
  //       rating: "1",
  //       comment: "A very good moment",
  //       source: "Dating App",
  //     },
  //     {
  //       date: "05/07/24",
  //       rating: "2",
  //       comment: "A very good moment",
  //       source: "Dating App",
  //     },
  //     {
  //       date: "05/07/24",
  //       rating: "4",
  //       comment: "A very good moment",
  //       source: "Dating App",
  //     },
  //     {
  //       date: "05/07/24",
  //       rating: "4",
  //       comment: "A very good moment",
  //       source: "Dating App",
  //     },
  //   ],
  //   payment_history: [
  //     {
  //       date: "20/03/24",
  //       payment_method: "VISA",
  //       amount: "$49.00",
  //       comment: "MOnthly subscription",
  //     },
  //     {
  //       date: "20/03/24",
  //       payment_method: "VISA",
  //       amount: "$49.00",
  //       comment: "MOnthly subscription",
  //     },
  //     {
  //       date: "20/03/24",
  //       payment_method: "VISA",
  //       amount: "$49.00",
  //       comment: "MOnthly subscription",
  //     },
  //     {
  //       date: "20/03/24",
  //       payment_method: "VISA",
  //       amount: "$49.00",
  //       comment: "MOnthly subscription",
  //     },
  //   ],
  // };
  async function fetchData() {
    try {
      console.log(`requete customers to backend`);
      const response = await fetch(
        `http://localhost:3000/customers/${customerId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      let data = await response.json();
      console.log(`Response:  ${response}`);
      if (response.ok) {
        console.log(` successful ${response.ok}`);
        setcustomers(data);
      } else {
        console.log(`data: ${data}}`);
        console.log(`customers unsuccessful ${response.ok}`);
        navigate("/unauthorized");
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
    <Grid container spacing={3} style={{ padding: 24 }}>
      <Grid item xs={12}>
        <Typography variant="h4">Customer Details</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper
          style={{ padding: 16, boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)" }}
        >
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
              <Avatar
                alt="Francis Mitcham"
                src="/path/to/image.jpg"
                style={{ width: 100, height: 100 }}
              />
            </Grid>
            <Grid item>
              <Typography variant="h6">{customer.name}</Typography>
            </Grid>
            <Grid item style={{ display: "inline-flex" }}>
              <Typography variant="body2">
                <strong>{customer.encounters.length}</strong>
                <p>Total Encounters</p>
              </Typography>
              <Typography
                variant="body2"
                style={{ marginLeft: "40px", marginRight: "40px" }}
              >
                <strong>{positivesMeets(customer.encounters)}</strong>
                <p>Positives</p>
              </Typography>
              <Typography variant="body2">
                <strong>3</strong>
                <p>In Progress</p>
              </Typography>
            </Grid>
            <Grid
              item
              rowSpacing={200}
              style={{ display: "block", justifyContent: "left" }}
            >
              <p>Short details:</p>
              <Typography variant="body2">
                <strong>User ID:</strong>
                <p>{customer.id}</p>
              </Typography>
              <Typography variant="body2">
                <strong>Email:</strong>
                <p>{customer.email}</p>
              </Typography>
              <Typography variant="body2">
                <strong>Address:</strong>
                <p>{customer.adress}</p>
              </Typography>
              {/* <Typography variant="body2">
                <strong>Last Activity:</strong>
                <p>15 Feb, 2024</p>
              </Typography> */}
              {/* <Typography variant="body2">
                <strong>Coach:</strong>
                <p>Nicolas Latourne</p>
              </Typography> */}
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} md={8}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper style={{ boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)" }}>
              <Typography variant="h6" style={{ padding: 16 }}>
                Recent Meetings
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Rating</TableCell>
                      <TableCell>Report</TableCell>
                      <TableCell>Source</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {customer.encounters.map((meet, i) => (
                      <TableRow key={i}>
                        <TableCell>{meet.date}</TableCell>
                        <TableCell>{meet.rating}</TableCell>
                        <TableCell>{meet.comment}</TableCell>
                        <TableCell style={{ color: "orange" }}>
                          {meet.source}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper
              style={{
                padding: 16,
                boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Typography variant="h6" style={{ padding: 16 }}>
                Payments History
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Payment Method</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Comment</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {customer.payment_history.map((payment, i) => (
                      <TableRow>
                        <TableCell>{payment.date}</TableCell>
                        <TableCell>{payment.payment_method}</TableCell>
                        <TableCell>{payment.amount}</TableCell>
                        <TableCell>{payment.comment}</TableCell>
                      </TableRow>
                    ))}
                    {/* Populate this with your data */}
                    {/* Add more rows as needed */}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomerDetails;
