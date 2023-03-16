import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PetersonAlgorithm from './Components/PetersonAlgorithm';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Try from './Components/Try';
import FCFSScheduling from './Components/FCFSScheduling';


const router = createBrowserRouter([
  {
    path: "/",
    element: <PetersonAlgorithm />,
  }, {
    path: "/peterson",
    element: <Try />,
  },
  {
    path: "/fcfs",
    element: <FCFSScheduling />,
  },])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);

