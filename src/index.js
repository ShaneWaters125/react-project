import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Films from './pages/Films';
  
const root = ReactDOM.createRoot(document.getElementById('root'));

//OP tutorial: https://www.w3schools.com/react/react_router.asp
export default function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="film=:filmid" element={<Films />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Website
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
  
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();