import './App.css';
import { React } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup';
import MainPage from './components/MainPage';
import RecruiterView from './components/RecruiterView';
import Navi from './components/Navi';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Cerificates from './components/Certificates';
import Connect from './components/Connect';

import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Login} />
        <Route path='/signup' Component={Signup}/>
        <Route path='/main' Component={MainPage}/>
        <Route path='/recruiter' Component={RecruiterView}/>
        <Route path='/main/navigation' Component={Navi} />
        <Route path='/main/about' Component={About}/>
        <Route path='/main/skills' Component={Skills}/>
        <Route path='/main/projects' Component={Project}/>
        <Route path='/main/certificates' Component={Cerificates}/>
        <Route path='/main/connect' Component={Connect}/>
      </Routes>
    </Router>
  );
}
