import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import StudentList from "./components/StudentList";
import Register from "./components/Register";
import EtudiantList from "./components/EtudiantList";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/student" element={<StudentList />} />
              <Route path="/etudiant" element={<EtudiantList />} />
          </Routes>
      </Router>
  );
}

export default App;
