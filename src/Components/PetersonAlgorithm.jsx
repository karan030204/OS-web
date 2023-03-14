import { useState, useRef } from "react";

let count = 0;
function PetersonAlgorithm() {
  const [balls, setBalls] = useState([{ size: 50, text: "P1" }]);
  const [showCritSection, setShowCritSection] = useState(true);
  const [isMoving, setIsMoving] = useState(false);
  const [isStartButtonClicked, setIsStartButtonClicked] = useState(false);
  const ballRef = useRef(null);
  const [moveTime, setMoveTime] = useState(null); // use a variable to hold the time to travel
  const [moveDistance, setMoveDistance] = useState(0); // use a variable to hold the distance to move
  const [turn, setTurn] = useState(0); // use a variable to represent whose turn it is

  const ballStyle = {
    backgroundColor: "red",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
  };

  const ballContentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  };

  const criticalSectionStyle = {
    padding: "3em",
    position: "fixed",
    top: "38%",
    right: "42.8%",
    transform: "translateY(-50%)",
    backgroundColor: "black",
    opacity: 0.8,
    width: "200px",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "2rem",
    zIndex: 2,
  };
  const handleAddBall = () => {
    if(count == 1){
      alert("You cannot add more than 2 balls it violates the peterson's Algorithm");}else{
    count++;
    if (!isStartButtonClicked) {
      const newBall = {
        size: 50,
        text: `P${balls.length + 1}`,
        position: { x: 0, y: balls.length * 60 }, // position the ball vertically
      };
      setBalls([...balls, newBall]);
    }
  }
  };

  const handleStartMoving = () => {
    setIsStartButtonClicked(true);
    setIsMoving(true);

    const ballElement = ballRef.current;
    if (!ballElement) {
      return;
    }

    const ballRect = ballElement.getBoundingClientRect();
    const critSectionElement = document.getElementById("crit-section");
    if (!critSectionElement) {
      return;
    }

    const critSectionRect = critSectionElement.getBoundingClientRect();

    const distanceToCritSection = critSectionRect.left - ballRect.right;
    const distanceToStop = distanceToCritSection - 10;

    const timeToTravel = calculateTimeToTravel(distanceToStop); // calculate time based on distance
    setMoveTime(timeToTravel); // set the time to travel in a separate variable
    setMoveDistance(distanceToStop); // set the distance to move in a separate variable

    // Acquire the lock
    setTurn(1); // set the turn to P1
    while (turn === 0 && isMoving) {
      // wait for P2 to have a turn
    }

    moveBall(ballElement, distanceToStop, timeToTravel);

    // Release the lock
     setTurn(0); // set the turn to 0 (i.e., no one's turn)
  };

  const calculateTimeToTravel = (distanceToStop) => {
    const pixelsPerSecond = 100; // set a constant
    const timeToTravel = distanceToStop / pixelsPerSecond; // calculate time based on distance and speed
    return timeToTravel; // return the time to travel
  };

  const moveBall = (ballElement, distanceToStop, timeToTravel) => {
    const pixelsPerSecond = distanceToStop / timeToTravel; // calculate the speed (pixels per second)

    let start = null;
    let currentPosition = 0;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      currentPosition = (pixelsPerSecond * elapsed) / 1000; // calculate the new position of the ball

      if (currentPosition < distanceToStop) {
        window.requestAnimationFrame(step); // continue moving the ball
      } else {
        setIsMoving(false); // stop moving the ball
      }

      ballElement.style.transform = `translateX(${currentPosition}px)`; // move the ball to its new position
    };

    window.requestAnimationFrame(step); // start moving the ball
  };

  return (
    <div>
      <div style={{ display: "inline-block", justifyContent: "left" ,margin : "12em"}}>
        {balls.map((ball, index) => (
          <div
            key={index}
            style={{ ...ballStyle, width: ball.size, height: ball.size, borderRadius:ball.size/2 , position:"relative",marginLeft : "10em",marginBottom:"0"}}
            ref={index === 0 ? ballRef : null}
          >
            <div style={ballContentStyle}>{ball.text}</div>
          </div>
        ))}
        <br/>
        <button onClick={handleAddBall}>Add Ball</button>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "3em" }}
      >
        <button disabled={isStartButtonClicked} onClick={handleStartMoving}>
          Start Moving
        </button>
      </div>
      {showCritSection && (
        <div style={criticalSectionStyle} id="crit-section">
          Critical Section
        </div>
      )}
    </div>
  );
}
export default PetersonAlgorithm;