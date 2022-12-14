import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Introduction from './Introduction';
import Clock from './Clock';
import TicTacToe from './TicTacToe';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import GenerateCats from "./pages/GenerateCats";
import NoPage from "./pages/NoPage";
import MoreCats from "./pages/MoreCats";

const root = ReactDOM.createRoot(document.getElementById('root'));

//Default Render
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


//Tutorial Render
// root.render(
//   <React.StrictMode>
//     <Introduction />
//     <Clock />
//   </React.StrictMode>
// )

//TicTacToe
// root.render(
//   <TicTacToe />
// )

//OP tutorial: https://www.w3schools.com/react/react_router.asp
export default function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="generatecats" element={<GenerateCats />} />
          <Route path="morecats" element={<MoreCats />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Website
root.render(
  <Application />
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();