import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes, 
  Route,
} from 'react-router-dom';
import AddCreator from './pages/AddCreator'
import Navigation from './components/Navigation'

import App from './App';
import "@picocss/pico/css/pico.min.css";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>  
        <Route path="/" element={<App />} />
        <Route path="/add-creator" element={<AddCreator/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
