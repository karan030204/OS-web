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
import { QueryBuilder } from "@mui/icons-material";
import Chart from './Chart';


let i = 0;
let sum = 0;
export const arrayData = [
 
];

const FCFSScheduling = () => {
  const [newData, setNewData] = React.useState("");
  const [currPos, setCurrPos] = React.useState("");
  const [isDisabled, setisDisabled] = React.useState(false);
  const [showChart, setShowChart] = React.useState(false);


  const rows = [];

  const [Queue, setQueue] = React.useState(rows);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(data, distance) {
    return { data, distance };
  }

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

  const handleDataField = (e) => {
    setNewData(e.target.value);
  };

  const handlePositionField = (e) => {
    setCurrPos(e.target.value);
  };
  

  const handleChart = () => {
    setShowChart(true);

  }
 

  

  return (
    <>
  
    <div className="flex">
      <div className="fcfs relative m-5 p-24 mt-24 rounded-lg  h-auto w-2/4 bg-gray-400 shadow-2xl">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            display: "flex",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="Data"
            value={newData}
            label="Enter the data"
            variant="outlined"
            onChange={(e) => {
              handleDataField(e);
            }}
          />
          <TextField
            id="Distance"
            value={currPos}
            label="Current Position"
            variant="outlined"
            onChange={(e) => {
              handlePositionField(e);
            }}
            disabled={isDisabled}
          />
          <Stack direction="row" spacing={2}>
            <Button onClick={AddData} variant="outlined">
              Add
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={handleChart}>Create Chart</Button>
          </Stack>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 200 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Data &nbsp;(g)</StyledTableCell>
                <StyledTableCell align="center">
                  Distance&nbsp;(g)
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Queue.map((row, index) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="center">{row.data}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.distance}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="seek-time flex mb-40 text-2xl font-bold">
          Total Seek Time is : {sum}
        </div>
        
     

      </div>
      {showChart && <Chart />}
      </div>

      
    </>
  );
};

export default FCFSScheduling;
