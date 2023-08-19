import React from 'react';
import Header from './components/Header';
import Cards from '../components/Cards';
import useRoutes from 'react-router-dom';
import { supabase } from '../client';
import { useState, useEffect } from 'react';

export default function ShowCreators() {
  const [creators, setCreators] = useState([])
  const [creator, setCreator] = useState({
    name: "",
    url: "",
    desciption: "",
    imageURL: "",
  });
  
  const { name, url, description, imageURL } = creator;

  useEffect(() => {
    fetchCreators();
  }, []);

  async function fetchCreators() {
    
    const {data, error } = await supabase
      .from('creators')
      .select()
    setCreators(data)
    console.log(data)
  }

  async function createCreator() {
    console.log('creatCreators')
    await supabase
      .from('creators')
      .insert([
        { name, url, description, imageURL }
      ])
      .single();
    setCreator({ name: '', url: '', description: '', imageURL: '' })
    fetchCreators()
    console.log("CreateCreator: Fetch: ", data)
  }

  return (

    <div className="cards">
      <h2> Creators </h2>
      {creators.map((creator) => (
          <Cards
            name={creator.name} 
            url={creator.url}
            description={creator.description}
            imageURL={creator.imageURL}
          />
      ))}
    </div>
  );
}