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

function PriorityTable(props) {
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

  const Priority = (e, i) => {
    const newValue = e.target.value;
    if (!isNaN(newValue)) {
      const t = process;
      t[i]["Priority"] = newValue;
      setProcess(t);
      setError("");
    } else {
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
    } else {
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
    } else {
      setError2("Please enter a positive number");
    }
  };

  // const priorityPreemptive = require("../models/CPUScheduling");

  function priorityScheduling(process) {
    if (!process || !process.length) return [];
    let currentTime = 0,
      completed = 0;
    let n = process.length;
    if (n == 0) return [];
    let isCompleted = Array(process.length).fill(0);
    let prev = 0;
    let burstRemaining = process.map((x) => x.Burst_Time);

    while (completed !== n) {
      let index = -1;
      let max = Number.MAX_SAFE_INTEGER;
      for (let i = 0; i < n; i++) {
        if (process[i].Arrival_Time <= currentTime && isCompleted[i] === 0) {
          if (process[i].Priority < max) {
            max = process[i].Priority;
            index = i;
          }
          if (process[i].Priority === max) {
            if (process[i].Arrival_Time < process[index].Arrival_Time) {
              max = process[i].Priority;
              index = i;
            }
          }
        }
      }
      if (index !== -1) {
        if (burstRemaining[index] === process[index].Burst_Time) {
          process[index].Response_Time =
            currentTime - process[index].Arrival_Time;
        }
        burstRemaining[index] -= 1;
        currentTime++;
        prev = currentTime;
        if (burstRemaining[index] === 0) {
          process[index].Completion_Time = currentTime;
          process[index].TurnAround_Time =
            process[index].Completion_Time - process[index].Arrival_Time;
          process[index].Waiting_Time =
            process[index].TurnAround_Time - process[index].Burst_Time;
          isCompleted[index] = 1;
          completed++;
        }
      } else {
        currentTime++;
      }
    }
    return process;
  }

  //Result
  const Result = async (process) => {
    // console.log(priorityScheduling(process));
    // let data = process;
    // const res = await axios.post("http://localhost:4000/schedule", {data : [...process]});
    try {
      const data = await axios.post("http://localhost:4000/schedule", {
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
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      required
                      id="priority"
                      label="Priority"
                      defaultValue={process.Priority}
                      autoComplete="current-password"
                      variant="standard"
                      onChange={(e) => Priority(e, i)}
                    />
                    {error && <div style={{ color: "red" }}>{error}</div>}
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "22ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                         required
                        id="arrival_time"
                        label="Arrival Time"
                        autoComplete="current-password"
                        defaultValue={process.Arrival_Time}
                        variant="standard"
                        onChange={(e) => arrivalTime(e, i)}
                      />
                      {error1 && <div style={{ color: "red" }}>{error1}</div>}
                    </div>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "22ch" },
                    }}
                    defaultValue={process.Burst_Time}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        required
                        className="bursttime"
                        id="burst_time"
                        label="Burst Time "
                        autoComplete="current-password"
                        variant="standard"
                        onChange={(e) => burstTime(e, i)}
                      />
                      {error2 && <div style={{ color: "red" }}>{error2}</div>}
                    </div>
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

export default PriorityTable;
