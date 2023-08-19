import React from 'react';
import './style.css';
import Header from './components/Header';
import Cards from './components/Cards';
import useRoutes from 'react-router-dom';
import { supabase } from './client';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import ShowCreators from './pages/ShowCreators'

export default function App() {
 
  return(
    <div>
      <ShowCreators />
    </div>
  )
}
