import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import "./PriorityTable.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function PriorityTable() {
  const rows = [createData("1", "", "", "", "")];

  function createData(
    PID,
    Priority,
    Arrival_Time,
    Burst_Time,
    Completion_Time
  ) {
    return { PID, Priority, Arrival_Time, Burst_Time, Completion_Time };
  }

  const [process, setProcess] = useState(rows);

  //Add Process
  const addProcess = () => {
    let pid = Math.floor(100 * Math.random());
    setProcess([...process, createData(pid, "", "", "", "")]);
  };

  //Delete Process
  const deleteProcess = (PID) => {
    const newProcess = process.filter((CurrProcess) => {
      return CurrProcess.PID !== PID;
    });
    //newProcess becomes new Array and it filtered out the process which we have clicked
    setProcess(newProcess);
  };

  const Priority = (e) => {
    console.log(e.target.value);
  };
  const arrivalTime = (e) => {
    console.log(e.target.value);
  };
  const burstTime = (e, i) => {
    const t = process;
    t[i]["Burst_Time"] = e.target.value;
    setProcess(t);
    console.log("t", t);
  };
  //Result
  const Result = () => {};

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
                Respnse Time(RT)
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
                  {process.Priority}
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
                        id="priority"
                        label="Priority"
                        autoComplete="current-password"
                        variant="standard"
                        onChange={(e) => Priority(e)}
                      />
                    </div>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  {process.Arrival_Time}
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
                        id="arrival_time"
                        label="Arrival Time"
                        autoComplete="current-password"
                        variant="standard"
                        onChange={(e) => arrivalTime(e)}
                      />
                    </div>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  {process.Burst_Time}
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
                        className="bursttime"
                        id="burst_time"
                        label="Burst Time "
                        autoComplete="current-password"
                        variant="standard"
                        onChange={(e) => burstTime(e, i)}
                      />
                    </div>
                  </Box>
                </TableCell>
                <TableCell align="center">{process.Completion_Time}</TableCell>
                <TableCell align="center">{process.Turnaround_Time}</TableCell>
                <TableCell align="center">{process.Waiting_Time}</TableCell>
                <TableCell align="center">{process.Response_Time}</TableCell>
                <TableCell align="center">
                  <Button
                    variant=" "
                    style={{ backgroundColor: "#212121", color: "white" }}
                    onClick={() => {
                      deleteProcess(process.PID);
                    }}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
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
          onClick={addProcess}
        >
          Add Process
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            Result();
          }}
        >
          Result
        </Button>
      </Stack>
    </>
  );
}

export default PriorityTable;
