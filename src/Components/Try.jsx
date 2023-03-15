import React, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./Try.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from '@mui/material/Alert';

let BALL_DISTANCE = 157;
let BALL_COUNT = 1;
let fcount = 0;
let p1 = 0;
let p2 = 0;
let moving_btn = 0;

const Try = () => {
  const [position, setPosition] = useState(-30); // initial position is 15px
  const [isStartButtonClicked, setIsStartButtonClicked] = useState(false); //we are notifying the status of the start moving button if it is clicked then setIsStartButtonClicked to true and then you cannot add new ball
  const [activeBallIndex, setActiveBallIndex] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [balls, setBalls] = useState([
    { text: "P1", position: { x: 0, y: 0 } },
  ]);

  const handleAddBall = () => {
    if (!isStartButtonClicked) {
      if (BALL_COUNT === 2) {
        alert(
          " You cannot add more than 2 balls it violates the PetersonAlgorithm"
        );
      } else {
        const newBall = {
          text: `P${balls.length + 1}`,
          position: { x: 0, y: balls.length * 10 },
        };
        setBalls([...balls, newBall]);
        BALL_COUNT++;
      }
    } else {
      alert("ANIMATION is already Started");
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const animation = (index) => {
    setActiveBallIndex(index);
    const newBalls = [...balls];
    newBalls[index].position.x += BALL_DISTANCE;
    setBalls(newBalls);
  };

  const handleClickProcess = (index) => {
    if (isStartButtonClicked) {
      if (fcount == 0) {
        if (index == 0) {
          p1++;
          if (activeBallIndex === index) {
            setActiveBallIndex(null);
          } else {
            animation(index);
          }
          fcount = 1;
        } else {
          p2++;
          if (activeBallIndex === index) {
            setActiveBallIndex(null);
          } else {
            animation(index);
          }
          fcount = 1;
          console.log(p1, p2, fcount);
        }
      } else if (
        (index == 0 && p1 == 1) ||
        (index == 0 && p1 == 0) ||
        (index == 1 && p2 == 1) ||
        (index == 1 && p2 == 0)
      ) {
        if (index == 0 && (p1 == 0 || p1 == 1) && (p2 == 0 || p2 >= 2)) {
          p1++;
          if (activeBallIndex === index) {
            // setActiveBallIndex(null);
            animation(index);
          } else {
            animation(index);
          }
          fcount = 1;
        } else if (index == 1 && (p2 == 0 || p2 == 1) && (p1 == 0 || p1 >= 2)) {
          p2++;
          if (activeBallIndex === index) {
            // setActiveBallIndex(null);
            animation(index);
          } else {
            animation(index);
          }
          fcount = 1;
        } else {
          //   <Alert severity="success" color="info">
          //   This is a success alert — check it out!
          // </Alert>
          handleClickOpen();

          // alert("Critical Section is OCCUPIED ");
        }
      } else if ((index == 0 && p1 >= 2) || (index == 1 && p2 >= 2)) {
        if (p1 >= 2) {
          p1++;
          if (activeBallIndex === index) {
            animation(index);
          } else {
            animation(index);
          }
        } else {
          p2++;
          if (activeBallIndex === index) {
            // setActiveBallIndex(null);
            animation(index);
          } else {
            // setActiveBallIndex(null);
            animation(index);
          }
        }
      } else {
        alert("Critical Section is OCCUPIED according to PETERSON ALGORITHM");
      }
    } else {
      alert("First you have to click START MOVING button");
    }
  };

  const handleStartMoving = () => {

    if(moving_btn == 0){

    if (balls.length === 2) {
      setIsStartButtonClicked(true);
      setPosition(position + BALL_DISTANCE);
    } else {
      alert("Add two PROCESS to observe the PETERSON ALGORITHM in real time");
    }
    moving_btn++;
  }else{
    alert('Both Balls Cannot Enter Critical Section it violates the Peterson Algorithm Try to click on one of the ball which you want to enter into critical section');
  }
  
  }
  const [flags, setFlags] = useState([false, false]);
  const [turn, setTurn] = useState(0);
  const [criticalSection, setCriticalSection] = useState('');

  const process1 = 0;
  const process2 = 1;

  const enterCriticalSection = (process) => {
    // Set the flag of the current process to true
    setFlags(flags => {
      flags[process] = true;
      return flags;
    });

    // Set the turn to the other process
    setTurn(1 - process);

    // Wait until the other process is finished or it's the current process's turn
    while (flags[1 - process] && turn === 1 - process) {}

    // Enter the critical section
    setCriticalSection(`Process ${process + 1} is in the critical section`);

    // Reset the flag of the current process to false
    setFlags(flags => {
      flags[process] = false;
      return flags;
    });
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "13%",
          left: "30%",
          transform: "translateX(-50%)",
        }}
        className="flex items-center justify-center font-bold text-white text-4xl Critical-Section absolute m-10 bg-black w-56 h-64"
      >
        Critical <br /> Section
      </div>
      <div
        style={{
          display: "inline-block",
          justifyContent: "left",
          margin: "10em",
        }}
      >
        {balls.map((ball, index) => (
          <div
            key={index}
            style={{
              transform: `translate(${ball.position.x + position}px, ${
                ball.position.y
              }px)`,
              cursor: "pointer",
            }}
            className={` ball flex items-center justify-center m-4 bg-blue-500 rounded-full  w-20 h-20  }`}
            onClick={() => handleClickProcess(index)}
          >
            <p className="text-black font-bold">{ball.text}</p>
          </div>
        ))}
      </div>
      <Stack
        style={{
          position: "absolute",
          top: "5%",
          left: "15%",
          transform: "translateX(-50%)",
        }}
        direction="row"
        spacing={2}
      >
        <Button className="button" variant="outlined" onClick={handleAddBall}>
          Add Process
        </Button>
      </Stack>
      <Stack
        style={{
          position: "absolute",
          top: "5%",
          left: "25%",
          transform: "translateX(-50%)",
        }}
        direction="row"
        spacing={2}
      >
        <Button variant="contained" onClick={handleStartMoving}>
          Start Moving
        </Button>
      </Stack>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Error"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Critical Section is OCCUPIED!!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>      
      
    
    </>

  );
};

export default Try;
