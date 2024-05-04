import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import News,{loader as NewsLoader} from './components/News';

const something = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    
    children :[
      {
        path : "/",
        element : <News />,
        loader : NewsLoader
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={something} />
  </React.StrictMode>,
)
