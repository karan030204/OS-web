// /*
// PID,
//     Priority,
//     Arrival_Time,
//     Burst_Time,
//     Completion_Time ,
//     TurnAround_Time,
//     Waiting_Time,
//     Response_Time
// */

let data = [
    {
        Arrival_Time: "2",
Burst_Time
: 
"3",
Completion_Time
: 
"",
PID
: 
"1",
Priority
: 
"1",
Response_Time
: 
"",
TurnAround_Time
: 
"",
Waiting_Time
: 
"",
    }
]

function priorityScheduling(process) {
  let currentTime = 0, completed = 0, avgTAT = 0, avgWT = 0;
  let n = process.length;
  if (n == 0) return [];
  let isCompleted = Array(100).fill(0);
  let prev = 0;
  let burstRemaining = process.map((x) => x.Burst_Time);

  while (completed !== n) {
    let index = -1;
    let max = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
      if (process[i].Arrival_Time <= currentTime && isCompleted[i] === 0) {
        if (process[i].priority < max) {
          max = process[i].Priority;
          index = i;
        }
        if (process[i].priority === max) {
          if (process[i].arrivalTime < process[index].arrivalTime) {
            max = process[i].Priority;
            index = i;
          }
        }
      }
    }
    if (index !== -1) {
      if (burstRemaining[index] === process[index].burstTime) {
        process[index].Response_Time = currentTime - process[index].Arrival_Time;
      }
      burstRemaining[index] -= 1;
      currentTime++;
      prev = currentTime;
      if (burstRemaining[index] === 0) {
        process[index].Completion_Time = currentTime;
        process[index].TurnAround_Time =
          process[index].Completion_Time - process[index].Arrival_Time;
        process[index].Waiting_Time = process[index].TurnAround_Time - process[index].Burst_Time;
        // process[index].Response_Time = process[index].startTime - process[index].Arrival_Time;
        avgTAT += process[index].TurnAround_Time;
        avgWT += process[index].Waiting_Time;

        isCompleted[index] = 1;
        completed++;
      }
    } else {
      currentTime++;
    }
  }
  avgTAT /= process.length;
  avgWT /= process.length;
  // let data = {
  //   process: process,
  //   avgTAT: avgTAT,
  //   avgWT: avgWT,
  //   date: new Date()
  // }
  // let newCPUScheduling = new CPUScheduling(data);
  // newCPUScheduling.save();
  // res.json(data);
  return process;
}

console.log(priorityScheduling(data));