import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Try from './Components/Try';
import FCFSScheduling from './Components/FCFSScheduling';
import OptimalPageReplacement from './Components/OptimalPageReplacement';
import PriorityScheduling from './Components/PriorityScheduling';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Chat from './Components/Chat';



const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Home />,
  }, {
    path: "/peterson",
    element: <Try />,
  },
  {
    path: "/fcfs",
    element: <FCFSScheduling />,
  },
  {
    path: "/opr",
    element: <OptimalPageReplacement />,
  },  {
    path: "/priority",
    element: <PriorityScheduling />,
  },
  {
    path: "/project",
    element: <Projects />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/bot",
    element: <Chat/>,
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);

