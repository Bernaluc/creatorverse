import React from 'react';
import { supabase } from '../client';
import { useState, useEffect } from 'react';

export default function AddCreator() {
  const [creators, setCreators] = useState([])
  const [creator, setCreator] = useState({
    id: null,
    name: "",
    url: "",
    desciption: "",
    imageURL: "",
  });
  
  const { name, url, description, imageURL } = creator;

  useEffect(() => {
  }, []);

  
  async function createCreator() {
    console.log('createCreators')
    await supabase
      .from('creators')
      .insert([
        { name, url, description, imageURL }
      ])
      .single()
    setCreator({ name: '', url: '', description: '', imageURL: '' })
    console.log("CreateCreator: Fetch: ", data)
  }

  return(

    <div className="creator-input">
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setCreator({ ...creator, name: e.target.value })}
      />
      <input
        placeholder="url"
        value={url}
        onChange={(e) => setCreator({ ...creator, url: e.target.value })}
      />
      <input
        placeholder="description"
        value={description}
        onChange={(e) => setCreator({ ...creator, description: e.target.value })}
      />
      <input
        placeholder="imageURL"
        value={imageURL}
        onChange={(e) => setCreator({ ...creator, imageURL: e.target.value })}
      />
      <button onClick={createCreator}>Add Creator</button>
    </div>
  );
  }