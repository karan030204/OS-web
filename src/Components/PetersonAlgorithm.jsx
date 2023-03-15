import React from 'react'
import "./Try.css";
const PetersonAlgorithm = () => {
  const [flags, setFlags] = React.useState([false, false]);
  const [turn, setTurn] = React.useState(0);
  const [criticalSection, setCriticalSection] = React.useState('');

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
    <div className='PetersonAlgorithm'>
      <h1>PETERSON ALGORITHM</h1>
      <hr />
      <ul>
        <li>
          <video width="400" height="500" controls >
          <source src="PetersonFinal.mp4" type="video/mp4"/>
          </video>
        </li>
        <li>
          <p className="intro">
          <strong>INTRODUCTION</strong> <br />
          Peterson's algorithm is used for mutual exclusion and allows two processes to share a single-use resource without conflict. It uses only shared memory for communication.

          It ensures that if a process is in the critical section, no other process must be allowed to enter it. This property is termed mutual exclusion.

          If more than one process wants to enter the critical section, the process that should enter the critical region first must be established. This is termed progress.
          <br /> <br />
          Let's consider the process 1 first raises a flag indicating a wish to enter the critical section. Then, turn is set to 2  to allow the other process. The process 2 enter the critical section. Finally, the while loop will only allow one process to enter its critical section.

        <br /> The Process 1 lowers the flag[1] in the exit section allowing the process 2 to continue if it has been waiting. <br />
        
     </p>
        </li>
      </ul>
      
      <ul>
        <li>
        
        Peterson's solution finds applications and examples of different problems in Operating Systems: <br />
            <br />
          1.The producer-consumer problem can be solved using Peterson's solution. <br /> <br />
          2 .The logic used in a semaphore is similar to Peterson's solution. The semaphores are used to solve many problems in OS. <br /> <br />
          3.The most suited example is the usage of Peterson's solution in the critical section problem. <br /> <br />
        </li>
      </ul>
      <div className="simulator">
          <p>This is a shared resource that can only be accessed by one process at a time. <br />
            click any of the process it will get that process in work and the other process <br /> will be in busy waiting. <br />
            Both the process have arrived at the same time. Choose one process So that <br />the other process can be send to busy waiting.</p>
            <button onClick={() => enterCriticalSection(process1)}>Process 1</button>
            <button onClick={() => enterCriticalSection(process2)}>Process 2</button>
          <p>{criticalSection}</p>
          </div>
      
    </div>
  )
}

export default PetersonAlgorithm