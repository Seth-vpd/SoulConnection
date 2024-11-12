// import React from 'react'

// const Coachs = () => {
//   return (
//     <div style={{ position: "absolute", top: "150px", left: "450px" }}>
//       Page Coachs
//     </div>
//   )
// }

// export default Coachs
import React from "react";
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
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Coachs() {
  // const Coachs = [
  //   {
  //     avatar: "BG",
  //     name: "Bobby Gilbert",
  //     email: "bobby@softnio.com",
  //     phone: "+342 675-6578",
  //     Coachs: 12,
  //   },
  //   {
  //     avatar: "OP",
  //     name: "Olivia Poulsen",
  //     email: "olivia@apple.com",
  //     phone: "+782 332-8328",
  //     Coachs: 18,
  //   },
  //   {
  //     avatar: "HM",
  //     name: "Heather Marshall",
  //     email: "marshall@reakitt.com",
  //     phone: "+342 545-5639",
  //     Coachs: 9,
  //   },
  //   {
  //     avatar: "BH",
  //     name: "Benjamin Harris",
  //     email: "info@mediavest.com",
  //     phone: "+342 675-6578",
  //     Coachs: 12,
  //   },
  //   {
  //     avatar: "JK",
  //     name: "Joshua Kennedy",
  //     email: "joshua@softnio.com",
  //     phone: "+323 345-8676",
  //     Coachs: 8,
  //   },
  //   {
  //     avatar: "JB",
  //     name: "Justine Bauwens",
  //     email: "bauwens@kline.com",
  //     phone: "+657 879-3214",
  //     Coachs: 11,
  //   },
  //   {
  //     avatar: "EH",
  //     name: "Ethan Hunter",
  //     email: "ethan@bergerpaints.com",
  //     phone: "+435 675-2345",
  //     Coachs: 19,
  //   },
  //   {
  //     avatar: "JB",
  //     name: "Justine Bauwens",
  //     email: "justine@acstext.com",
  //     phone: "+978 546-2342",
  //     Coachs: 21,
  //   },
  //   {
  //     avatar: "SP",
  //     name: "Summer Powell",
  //     email: "info@youngone.com",
  //     phone: "+435 433-8767",
  //     Coachs: 7,
  //   },
  // ];
  const navigate = useNavigate();
  let [Coachs, setCoachs] = useState([]);
  let [bulkAction, setBulkAction] = useState("");
  let [searchTerm, setSearchTerm] = useState("");
  let [filter, setFilter] = useState("");
  async function fetchData() {
    try {
      console.log(`requete Coachs to backend`);
      const response = await fetch(`http://localhost:3000/Coaches`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      let data = await response.json();
      console.log(`Response:  ${response}`);
      if (response.ok) {
        console.log(` successful ${response.ok}`);
        setCoachs(data);
      } else {
        console.log(`data: ${data}}`);
        console.log(`Coachs unsuccessful ${response.ok}`);
        navigate("/unauthorized");
      }
      return response;
    } catch (error) {
      console.log(`Error occurs during Coachs: ${error}`);
    }
  }
  useEffect(() => {
    Coachs = fetchData();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginBottom: "10px",
        }}
      >
        <Select
          value={bulkAction}
          onChange={(e) => setBulkAction(e.target.value)}
          displayEmpty
          style={{ marginRight: "10px" }}
        >
          <MenuItem value="" disabled>
            Bulk Action
          </MenuItem>
          <MenuItem value="delete">Delete</MenuItem>
        </Select>
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log(bulkAction)}
        >
          Apply
        </Button>
        <TextField
          variant="outlined"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          style={{ flex: 1, marginRight: "10px" }}
        />

        {/* Sélecteur pour le filtre */}
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          displayEmpty
          style={{ width: 200 }}
        >
          <MenuItem value="">All Coaches</MenuItem>
          <MenuItem value="active">Active Coaches</MenuItem>
          <MenuItem value="inactive">Inactive Coaches</MenuItem>
        </Select>

        {/* Bouton pour les paramètres */}
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="coaches table">
          <TableHead>
            <TableRow>
              <TableCell>
              </TableCell>
              <TableCell>Coach</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell align="center">Number of customers</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Coachs.map((Coachs, index) => (
              <TableRow key={index}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Avatar>{Coachs.avatar}</Avatar>
                    <Typography variant="body1" style={{ marginLeft: "10px" }}>
                      {Coachs.name}
                    </Typography>
                  </div>
                </TableCell>
                <TableCell>{Coachs.email}</TableCell>
                <TableCell>{Coachs.gender}</TableCell>
                <TableCell align="center">
                  {Coachs.customers_ids.length}
                </TableCell>
                <TableCell>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Coachs;
