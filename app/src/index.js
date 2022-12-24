import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnimePage from './pages/AnimePage';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="" element={<AnimePage />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

reportWebVitals();
