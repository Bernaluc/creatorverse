import React from 'react';
import Cards from '../components/Cards';
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