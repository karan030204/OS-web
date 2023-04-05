import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { FoodBankTwoTone, QueryBuilder } from "@mui/icons-material";
import Chart from "./Chart";
import Footer from "./Footer";
import NewNavbar from "./NewNavbar";
import Particle from "./Particle";

let i = 0;
let sum = 0;
export const arrayData = [];

const FCFSScheduling = () => {
  //Managing the state of "Data field"
  const [newData, setNewData] = React.useState("");

  //Managing the state of "CurrPos field"
  const [currPos, setCurrPos] = React.useState("");

  //Managing acitve state of CurrPosition Field
  const [isDisabled, setisDisabled] = React.useState(false);

  //Handling Chart on Clicking Create Chart button
  const [showChart, setShowChart] = React.useState(false);

  //Empty rows
  const rows = [];

  //Managing state of Data Queue
  const [Queue, setQueue] = React.useState(rows);

  //Styling TableCell
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  //Styling Table
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  //Creating row
  function createData(data, distance) {
    return { data, distance };
  }

  //Adding Data to table
  const AddData = () => {
    i++;
    arrayData.push({ Request_Id: `Req ${i}`, Track_Number: newData });
    let dist = Math.abs(newData - currPos);
    sum += dist;
    setQueue([...Queue, createData(newData, dist)]);
    setNewData("");
    setCurrPos(newData);
    // setReq_id(counter);
    setisDisabled(true);
  };

  //Handling "Data" Field
  const handleDataField = (e) => {
    setNewData(e.target.value);
  };

  //Handling "CurrPos" TextField
  const handlePositionField = (e) => {
    setCurrPos(e.target.value);
  };

  //Creating Chart
  const handleChart = () => {
    setShowChart(true);
  };

  return (
    <>
      {/* NAVBAR */}
      <NewNavbar/>
      <Particle/>
      <h1 className="relative flex justify-center text-4xl font-bold mt-32 text-white">
        FCFS Disk Scheduling Algorithm
      </h1>
      <div className="flex">
        <div className="fcfs relative m-5 p-24 mt-20 mb-20 rounded-lg  h-auto w-2/4 bg-transparent shadow-2xl">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
              display: "flex",
            }}
            noValidate
            autoComplete="off"
          >
            {/* Data Field */}
            <TextField
              id="Data"
              value={newData}
              label="Enter the data"
              variant="outlined"
              onChange={(e) => {
                handleDataField(e);
              }}
              InputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
            />

            {/* Curr Position Field */}
            <TextField
              id="Distance"
              value={currPos}
              label="Current Position"
              variant="outlined"
              onChange={(e) => {
                handlePositionField(e);
              }}
              disabled={isDisabled}
              InputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
            />

            {/* Add Button */}
            <Stack direction="row" spacing={2}>
              <Button onClick={AddData} variant="outlined" style={{bg:"transparent", color:"white"}}>
                Add
              </Button>
            </Stack>

            <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={handleChart} style={{backgroundColor:"transparent",border:"1px solid white"}}>
                Create Chart
              </Button>
            </Stack>
          </Box>
          <TableContainer component={Paper} style={{backgroundColor : "transparent", color:"white"}}>
            <Table sx={{ minWidth: 200 }} aria-label="customized table" style={{backgroundColor : "transparent"}}>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">
                    Data &nbsp;(g)
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Distance&nbsp;(g)
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Queue.map((row, index) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell align="center" style={{color : "white"}}>{row.data}</StyledTableCell>
                    <StyledTableCell align="center" style={{color : "white"}}>
                      {row.distance}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="seek-time flex mb-20 text-2xl font-bold text-white"  >
            Total Seek Time is : {sum}
          </div>
        </div>
         {showChart && <Chart />}
      </div>

    </>
  );
};

export default FCFSScheduling;
