import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home';
import BagItems from './routes/BagItems';
import  {Provider} from 'react-redux';
import { itemStore } from './Redux_store/store';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/bags',
        element:<BagItems/>
      }
    ]

    }
  

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={itemStore}>
    <RouterProvider router ={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
