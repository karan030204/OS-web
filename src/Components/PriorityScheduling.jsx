import React, { useState } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Stack,
  Button,
  IconButton,
  Box,
  TextField,
  TableBody,
} from "@mui/material";
import "./PriorityTable.css";
import DeleteIcon from "@mui/icons-material/Delete";
import NavbarOfHome from "./NavbarOfHome";

function PriorityScheduling(props) {
  const Processes = [createData("1", "", "", "", "", "", "", "")];

  function createData(
    PID,
    Priority,
    Arrival_Time,
    Burst_Time,
    Completion_Time,
    TurnAround_Time,
    Waiting_Time,
    Response_Time
  ) {
    return {
      PID,
      Priority,
      Arrival_Time,
      Burst_Time,
      Completion_Time,
      TurnAround_Time,
      Waiting_Time,
      Response_Time,
    };
  }

  const [process, setProcess] = useState(Processes);
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  // const regex = /^[+]?([1-9][0-9]*(?:[\.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/
  //Add Process
  const addProcess = (i) => {
    let pid = Math.floor(100 * Math.random());
  setProcess([...process, createData(pid, "", "", "", "", "", "", "")]);

    const t = process;
    console.log("hi");
    
    
  };

  //Delete Process
  const deleteProcess = (PID) => {
    const newProcess = process.filter((CurrProcess) => {
      return CurrProcess.PID !== PID;
    });
    //newProcess becomes new Array and it filtered out the process which we have clicked
    setProcess(newProcess);
  };

  //getting priority 
  const Priority = (e, i) => {
    const newValue = e.target.value;
    if (!isNaN(newValue)) {
      const t = process;
      t[i]["Priority"] = newValue;
      setProcess(t);
      setError("");
    }
     else 
     {
      setError("Please enter a valid number");
    }
  };

  const arrivalTime = (e, i) => {
    const newValue = e.target.value;
    if (!isNaN(newValue)) {
      const t = process;
      t[i]["Arrival_Time"] = e.target.value;
      setProcess(t);
      setError1("");
    } 
    else 
    {
      setError1("Please enter a positive number");
    }
  };

  const burstTime = (e, i) => {
    const newValue = e.target.value;
    if (!isNaN(newValue)) {
      const t = process;
      t[i]["Burst_Time"] = e.target.value;
      setProcess(t);
      setError2("");
    } 
    else 
    {
      setError2("Please enter a positive number");
    }
  };

  // const priorityPreemptive = require("../models/CPUScheduling");



  //Result
  const Result = async (process) => {
    // console.log(priorityScheduling(process));
    // let data = process;
    // const res = await axios.post("http://localhost:4000/schedule", {data : [...process]});
    try {
      const data = await axios.post("http://localhost:4000/PrioritySchedule", {
        process: [...process],
      });
      const myData = data.data.process;
      setProcess(myData);
      console.log(myData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <NavbarOfHome/> 
      <TableContainer
        component={Paper}
        sx={{ width: "100%", alignItems: "center", justifyContent: "center" }}
      >
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          {/* Header */}
          <TableHead>
            <TableRow style={{ backgroundColor: "#212121" }}>
              <TableCell
                style={{
                  fontFamily: "Raleway",
                  color: "white",
                  fontSize: "1.2em",
                  fontWeight: "100",
                }}
              >
                PID
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "white",
                  fontSize: "1.2em",
                  fontFamily: "Raleway",
                  fontWeight: "100",
                }}
              >
                Priority&nbsp;
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "white",
                  fontSize: "1.2em",
                  fontFamily: "Raleway",
                  fontWeight: "100",
                }}
              >
                Arrival Time (AT)
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "white",
                  fontSize: "1.2em",
                  fontFamily: "Raleway",
                  fontWeight: "100",
                }}
              >
                Burst Time&nbsp;(BT)
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "white",
                  fontSize: "1.2em",
                  fontFamily: "Raleway",
                  fontWeight: "100",
                }}
              >
                Completion Time&nbsp;(CT)
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "white",
                  fontSize: "1.2em",
                  fontFamily: "Raleway",
                  fontWeight: "100",
                }}
              >
                TurnAround Time(TA)
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "white",
                  fontSize: "1.2em",
                  fontFamily: "Raleway",
                  fontWeight: "100",
                }}
              >
                Waiting time&nbsp;(WT)
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "white",
                  fontSize: "1.2em",
                  fontFamily: "Raleway",
                  fontWeight: "100",
                }}
              >
                Response Time(RT)
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "white",
                  fontSize: "1.2em",
                  fontFamily: "Raleway",
                  fontWeight: "100",
                }}
              >
                Delete Process&nbsp;
              </TableCell>
            </TableRow>
          </TableHead>

          {/* Body */}
          <TableBody>
            {process.map((process, i) => (
              <TableRow
                key={process.PID}
                sx={{ "&:last-child td, &:last-child th": { border: 0, fontSize : "" } }}
              >
                <TableCell component="th" scope="row">
                  {process.PID}
                </TableCell>
                <TableCell align="center">
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "22ch" },
                    }}
                  >
                    <TextField
                      required
                      id="priority"
                      label="Priority"
                      defaultValue={process.Priority}
                      autoComplete="current-password"
                      variant="standard"
                      onChange={(e) => Priority(e, i)}
                      error={error !== ''}
                      helperText={error}
                    />
                    
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "22ch" },
                    }}
                  >
                      <TextField
                         required
                        id="arrival_time"
                        label="Arrival Time"
                        autoComplete="current-password"
                        defaultValue={process.Arrival_Time}
                        variant="standard"
                        onChange={(e) => arrivalTime(e, i)}
                        error={error1 !== ''}
                        helperText={error1}
                      />
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "22ch" },
                    }}
                    
                  >
                      <TextField
                        required
                        className="bursttime"
                        id="burst_time"
                        label="Burst Time "
                        autoComplete="current-password"
                        variant="standard"
                        onChange={(e) => burstTime(e, i)}
                        error={error2 !== ''}
                        helperText={error2}
                      />
                  </Box>
                </TableCell>
                <TableCell align="center">{process.Completion_Time}</TableCell>
                <TableCell align="center">{process.TurnAround_Time}</TableCell>
                <TableCell align="center">{process.Waiting_Time}</TableCell>
                <TableCell align="center">{process.Response_Time}</TableCell>
                <TableCell align="center">
                  <IconButton
                    variant="contained"
                    color="error"
                    onClick={() => {
                      deleteProcess(process.PID);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        spacing={2}
        direction="row"
        style={{ justifyContent: "center", padding: "10em" }}
      >
        <Button
          variant="contained"
          overflow="scroll"
          style={{ backgroundColor: "#212121" }}
          onClick={() => {
            addProcess();
          }}
        >
          Add Process
        </Button>
        <Button
          variant="outlined"
          onClick={(e) => {
            Result(process);
          }}
        >
          Result
        </Button>
      </Stack>
    </>
  );
}

export default PriorityScheduling;
