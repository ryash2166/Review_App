import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import ReviewContextProvider from './components/context/ReviewContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ReviewContextProvider>
      <App />
    </ReviewContextProvider>
  // </React.StrictMode>
)
