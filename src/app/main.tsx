import '../styles/variables.css';
import '../styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <>
    <ToastContainer position={'top-center'} autoClose={2000} />,
    <App />,
  </>,

  // </React.StrictMode>,
);
