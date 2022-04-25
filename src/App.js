import React from 'react';
import './App.css';
import styled, { keyframes } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Journalism from './components/Journalism';

const App = (props) => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Journalism />} />
      </Routes>
    </div>
  );
};

export default App;
