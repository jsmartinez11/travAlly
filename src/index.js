import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/About'
import FindAllys from './components/FindAllys'
import Contact from './components/Contact';
import Community from './components/Community';
import "@fontsource/indie-flower";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/findallys' element={<FindAllys/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/community' element={<Community/>} />
    </Routes>
  </Router>
  ,document.getElementById('root')
);
