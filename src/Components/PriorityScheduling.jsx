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
import Particle from "./Particle";
import NewNavbar from "./NewNavbar";

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

  const colors = {};
  let count = 0;
  const [process, setProcess] = useState(Processes);
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [gantArray, setgantArray] = useState([]);
  const [isResultClicked, setIsResultClicked] = useState(false);
  const [isValidBurstTime, setIsValidBurstTime] = useState(false);
  const [isValidArrivalTime, setIsValidArrivalTime] = useState(false);
  const [isValidPriority, setIsValidPriority] = useState(false);

  // const regex = /^[+]?([1-9][0-9](?:[\.][0-9])?|0\.0[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/
  //Add Process
  const addProcess = (i) => {
    let pid = Math.floor(100 * Math.random());
    setProcess([...process, createData(pid, "", "", "", "", "", "", "")]);

    const t = process;
  };

  //Delete Process
  const deleteProcess = (PID) => {
    const newProcess = process.filter((CurrProcess) => {
      return CurrProcess.PID !== PID;
    });
    //newProcess becomes new Array and it filtered out the process which we have clicked
    setProcess(newProcess);
    setIsValidArrivalTime(true);
    setIsValidBurstTime(true);
    setIsValidPriority(true);
  };

  //getting priority
  const Priority = (e, i) => {
    const newValue = e.target.value;
    setIsValidPriority(newValue.trim() !== '' && !isNaN(newValue) );

    if (!isNaN(newValue) && newValue !== '' ) {
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
    setIsValidArrivalTime(newValue.trim() !== '' && !isNaN(newValue) && parseInt(newValue) >= 0);

    if (!isNaN(newValue) && newValue>=0 && newValue !== '') 
    
    {
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
    setIsValidBurstTime(newValue.trim() !== '' && !isNaN(newValue) && parseInt(newValue)>= 0);

    if (!isNaN(newValue) && newValue>=0 && newValue !== '') {
      const t = process;
      t[i]["Burst_Time"] = e.target.value;
      setProcess(t);
      setError2("");
    } else {
      setError2("Please enter a positive number");
   }   
  };

  const getColor = (data) => {
    let flag = 0;
    if (colors[data]) {
      return colors[data];
    } else {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16); //generate a random color
      if (randomColor === "#FFFFFF") {
        getColor(data);
      } else {
        for (let i = 0; i < colors.length; i++) {
          if (randomColor === colors[i]) {
            flag = 1;
          } else {
            flag = 0;
          }
        }
        if (flag === 0) {
          return (colors[data] = `${randomColor}`);
        }
      }
    }
  };
  // const priorityPreemptive = require("../models/CPUScheduling");

  //Result
  const Result = async (process) => {
    setIsResultClicked(true);
    // console.log(priorityScheduling(process));
    // let data = process;
    // const res = await axios.post("http://localhost:4000/schedule", {data : [...process]});
    try {
      const data = await axios.post("http://localhost:4000/PrioritySchedule", {
        process: [...process],
      });

      const myData = data.data.process;
      const ganttChar = data.data.ganttChart;
      console.log({ ganttChar });
      setProcess(myData);
      // console.log(myData);
      setgantArray(ganttChar);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>

      <NewNavbar/>
      <Particle />
      <TableContainer
        component={Paper}
        sx={{
          width: "100 %",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
          marginTop:"7em"
        }}
        >
          <h1 className="flex justify-center items-center text-white mb-5 font-bold ">Priority Preemptive Scheduling Algorithm</h1>
        <Table sx={{ minWidth: 80 }} aria-label="simple table">
          {/* Header */}
          <TableHead>
            <TableRow
              style={{ backgroundColor: "transparent", color: "white" }}
            >
              <TableCell
                style={{
                  fontFamily: "Raleway",
                  color: "white",
                  fontSize: "1.2em",
                  fontWeight: "900",
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
                  fontWeight: "900",
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
                  fontWeight: "900",
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
                  fontWeight: "900",
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
                  fontWeight: "900",
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
                  fontWeight: "900",
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
                  fontWeight: "900",
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
                  fontWeight: "900",
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
                  fontWeight: "900",
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
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                    fontSize: "",
                    color: "white",
                  },
                  color: "white", // Add this line
                }}
              >
                <TableCell
                  style={{ color: "White" }}
                  component="th"
                  scope="row"
                >
                  {process.PID}
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "22ch" },
                      color: "white",
                    }}
                  >
                    <TextField
                    type="number"
                      required
                      id="priority"
                      label="Priority"
                      defaultValue={process.Priority}
                      autoComplete="current-password"
                      variant="standard"
                     // onChange={(e) => Priority(e, i)}
                      onChange={(e) => {
                        if (e.target.value.trim() === "") {
                          setError("Priority cannot be empty");
                          setIsValidPriority(false);
                          } 
                          else {
                          setError("");
                          Priority(e, i);
                        }
                      }
                    }
                    onKeyPress={(event)=> {
                      if (event.key === "e" || event.key === "E") {
                          event.preventDefault();
                        }

                      }}
                      // type="number"
                      error={error !== ""}
                      helperText={error}
                      inputProps={{
                        style: { color: "white" },
                      }}
                      InputProps={{
                        style: { color: "white" },
                      }}
                      InputLabelProps={{
                        style: { color: "white" },
                      }}
                      style={{borderBottom: "1px solid gray"}}
                    />
                  </Box>
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "22ch" },
                      color: "white",
                    }}
                  >
                    <TextField
                      required
                      type="number"
                      sx={{ color: "white" }}
                      id="arrival_time"
                      label="Arrival Time"
                      autoComplete="current-password"
                      defaultValue={process.Arrival_Time}
                      variant="standard"
                      // type="number"
                      inputProps={{ min: 0,}}
                      // onChange={(e) => arrivalTime(e, i)}
                      onChange={(e) => {
                        if (e.target.value.trim() === "") {
                          setError1("Arrival Time cannot be empty");
                          setIsValidArrivalTime(false);
                        } else {
                          setError1("");
                          arrivalTime(e, i);
                        }
                         }}
                      onKeyPress={(event)=> {
                        if (event.key === "e" || event.key === "E") {
                            event.preventDefault();
                          }
  
                        }}
                       
                      error={error1 !== ""}
                      helperText={error1}
                     
                      InputProps={{
                        style: { color: "white" },
                      }}
                      InputLabelProps={{
                        style: { color: "white" },
                      }}
                      style={{borderBottom: "1px solid gray"}}

                    />
                  </Box>
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "22ch" },
                      color: "white",
                    }}
                    style={{ color: "white" }}
                  >
                    <TextField
                      required
                      type="number"
                      className="bursttime"
                      id="burst_time"
                      label="Burst Time "
                      autoComplete="current-password"
                      variant="standard"
                      // type="number"
                      inputProps={{ min: 0,}}
                      // onChange={(e) => burstTime(e, i)}
                      onChange={(e) => {
                        if (e.target.value.trim() === "") {
                          setError2("Burst Time cannot be empty");
                          setIsValidBurstTime(false);
                        } else {
                          setError2("");
                          burstTime(e, i);
                        }
                        }}
                      onKeyPress={(event)=> {
                        if (event.key === "e" || event.key === "E") {
                            event.preventDefault();
                          }
  
                        }}
                    
                      error={error2 !== ""}
                      helperText={error2}
                      InputProps={{
                        style: { color: "white" },
                      }}
                      InputLabelProps={{
                        style: { color: "white" },
                      }}
                      style={{borderBottom: "1px solid gray"}}

                    />
                  </Box>
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  {process.Completion_Time}
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  {process.TurnAround_Time}
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  {process.Waiting_Time}
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  {process.Response_Time}
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
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
        style={{ justifyContent: "center", padding: "3em", paddingTop: "7em" }}
      >
        <Button
          variant="contained"
          overflow="scroll"
          style={{ backgroundColor: "#212121" }}
          
          onClick={() => {
            if (isValidBurstTime && isValidArrivalTime && isValidPriority) {
              addProcess();
              setIsValidBurstTime(false);
              setIsValidArrivalTime(false);
              setIsValidPriority(false);
        
           }
          }}
          disabled={!isValidBurstTime || !isValidArrivalTime || !isValidPriority}
        >
          Add Process
        </Button>


        <Button
          variant="outlined"
          onClick={() => {
            if (isValidBurstTime && isValidArrivalTime && isValidPriority) {
              Result(process);
        
           }
          }}
          disabled={!isValidBurstTime || !isValidArrivalTime || !isValidPriority}
          style={{ color: "black", backgroundColor: "#FFFFFF" }}
        >
          Result
        </Button>
      </Stack>
      {/* To make the data horizontal we have added the flex flex-row and flex-groww to cover the remaining horizontal spaces */}
      <div className="ganttChart flex flex-row justify-center items-center ">
        {gantArray.map((data, index) => (
          <>
            <Box
              component="span"
              sx={{
                position: "relative",
                p: 3,
                border: "1px solid grey",
                backgroundColor: `${getColor(data)}`,
              }}
            >
              <h2 className="text-white text-2xl ">P{data}</h2>
              <span
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  left: "-8px",
                  fontSize: "18px",
                  color:"white",
                  fontWeight:"800"
                }}
              >
                {count++}
              </span>
            </Box>
          </>
        ))}
        <div className="mt-24 text-white font-bold text-lg" >{isResultClicked && count++}</div>
      </div>
    </>
  );
}


export default PriorityScheduling;