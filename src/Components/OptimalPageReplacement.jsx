import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { ArcElement, Chart } from "chart.js";
import "./opr.css";
import Particle from "./Particle";
import Footer from "./Footer";
import NewNavbar from "./NewNavbar";
Chart.register(ArcElement);

function OptimalPageReplacement() {
  const [pageReferences, setPageReferences] = useState([]);
  const [frames, setFrames] = useState(0);
  const [pageFaults, setPageFaults] = useState(0);
  const [hits, setHits] = useState(0);
  const [memoryState, setMemoryState] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [tableHeading, setTableHeading] = useState(false);
  const [pageFaultParagraph, setPageFaultParagraph] = useState(false);
  const [hitParagraph, setHitParagraph] = useState(false);
  const [, sethitMissStaus] = useState(0);

  //HandlePageReferenceChange
  const handlePageReferencesChange = (event) => {
    const references = event.target.value
      .split("")
      .map((reference) => parseInt(reference.trim()))
      .filter((reference) => !isNaN(reference));
    setPageReferences(references);
  };

  //Refreshpage 
  const refreshPage = () => {
    window.location.reload();
  };

  const handleFramesChange = (event) => {
    const frames = parseInt(event.target.value);
    setFrames(frames);
    setMemoryState(Array(frames).fill(null));
  };
  const chartData = {
    labels: ["Hits", "Misses"],
    datasets: [
      {
        data: [hits, pageFaults],
        backgroundColor: ["#218a2c", "#eb3636"],
        hoverBackgroundColor: ["#218a2c", "#eb3636"],
      },
    ],
  };

  const simulateOptimalPageReplacement = () => {
    let newTableData = [];
    let pageFaults = 0;
    let hits = 0;
    let hitMissStatus = [];
    let memoryState = Array(frames).fill(null);

    for (let i = 0; i < pageReferences.length; i++) {
      const page = pageReferences[i];
      if (!memoryState.includes(page)) {
        pageFaults++;
        hitMissStatus.push({
          Status: "Miss",
        });
        if (memoryState.includes(null)) {
          const index = memoryState.indexOf(null);
          memoryState[index] = page;
        } else {
          let distances = memoryState.map((frame) => {
            const remainingPages = pageReferences.slice(i + 1);
            const nextIndex = remainingPages.indexOf(frame);
            return nextIndex === -1 ? Infinity : nextIndex;
          });
          const index = distances.indexOf(Math.max(...distances));
          memoryState[index] = page;
        }
      } else {
        hits++;
        hitMissStatus.push({
          Status: "Hit",
        });
      }
      newTableData.push({
        page: page,
        pageFault: pageFaults,
        hits: hits,
        memory: [...memoryState],
        newFrame: memoryState.indexOf(page),
        hitMissStatus: hitMissStatus[i],
      });
    }
    setPageFaults(pageFaults);
    setHits(hits);
    setMemoryState(memoryState);
    setTableData(newTableData);
    setTableHeading(true);
    setPageFaultParagraph(true);
    setHitParagraph(true);
    sethitMissStaus(true);
  };
  const hitRatio = (hits / pageReferences.length).toFixed(2) * 100;
  const missRatio = (pageFaults / pageReferences.length).toFixed(2) * 100;

  return (
    <>
      <NewNavbar />
      <div className="flex flex-column  mt-32 ">
        <h1 className=" flex justify-center items-center text-white	 ">
          Optimal Page Replacment Algorithm
        </h1>
        <div className="flex flex-row relative top-0 left-0 p-4 justify-center items-center">
          <div className="flex  p-2 m-4 ">
            <label
              className=" p-1 font-bold text-2xl text-white "
              htmlFor="pageReferences"
            >
              {" "}
              Page Reference String:
            </label>
            <input
              type="text"
              className=" p-1 w-56 rounded-sm text-black font-bold"
              id="pageReferences"
              value={pageReferences}
              onChange={handlePageReferencesChange}
            />
          </div>
          <br />
          <div className="flex  p-2  m-4">
            <label
              className=" p-2 font-bold text-2xl text-white "
              htmlFor="frames"
            >
              Number of Frames:
            </label>
            <input
              type="number"
              className="  w-56 ml-10 rounded-sm text-black font-bold"
              id="frames"
              min="1"
              defaultValue={1}
              onChange={handleFramesChange}
             
            />
          </div>
        </div>
        <div className="flex flex-row relative top-0 left-0 p-5 justify-center items-center">
          <button
            className="flex border-2 text-white py-2 px-8 focus:outline-none hover:bg-transparent rounded text-lg m-2"
            onClick={simulateOptimalPageReplacement}
          >
            Simulate
          </button>
          {pageFaultParagraph && (
            <button
              className="flex border-2 text-white py-2 px-8 focus:outline-none hover:bg-transparent rounded text-lg m-2"
              onClick={refreshPage}
            >
              Restart
            </button>
          )}
        </div>
       
        <br />
        {/* <button className="btn " id="button" onClick={simulateOptimalPageReplacement}>Simulate</button> */}

        <div className="flex flex-row">
          {tableHeading && (
            <>
              <table className="opr-table relative" id="myTable">
                <thead>
                  <tr>
                    <th>Page</th>
                    {/* <th>New Frame</th> */}
                    {memoryState.map((_frame, index) => (
                      <th key={index}>Frame {index}</th>
                    ))}
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.page}</td>
                      {/* <td>{row.newFrame}</td> */}
                      {row.memory.map((frame, index) => (
                        <td
                          key={index}
                          style={{
                            color: row.newFrame === index ? "black" : "white",
                            backgroundColor:
                              row.hitMissStatus.Status === "Hit"
                                ? row.newFrame === index
                                  ? "lightgreen"
                                  : ""
                                : row.newFrame === index
                                ? "lightcoral"
                                : "",
                          }}
                        >
                          {frame}
                        </td>
                      ))}

                      <td
                        style={{
                          color:
                            row.hitMissStatus.Status === "Hit"
                              ? "Green"
                              : "Red",
                        }}
                      >
                        {row.hitMissStatus.Status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
          <div className="flex flex-col relative p-4 mt-36 text-xl mr-40">
            <div>
              {pageFaultParagraph && (
                <div className=" text-white font-bold">
                  Page Faults: {pageFaults}
                </div>
              )}
              {hitParagraph && (
                <div className=" text-white font-bold">Hits: {hits}</div>
              )}
              {pageFaultParagraph && (
                <div className=" text-white font-bold">
                  Hit ratio {hitRatio.toFixed(3)} %
                </div>
              )}
              {pageFaultParagraph && (
                <div className="   text-white font-bold">
                  Miss ratio {missRatio.toFixed(4)} %
                </div>
              )}
            </div>
            <Particle/>
            <div class="flex justify-center relative items-center w-32 h-32  inset-0 m-auto">
              <Pie data={chartData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OptimalPageReplacement;
