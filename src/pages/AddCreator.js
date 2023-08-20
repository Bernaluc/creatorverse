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
    <form>
    <div className="grid">
      <label for="Creator">
        Creator Name
      <input id="name" required
        placeholder="Name"
        value={name}
        onChange={(e) => setCreator({ ...creator, name: e.target.value })}
      />
      </label>
      <label for="url">
        URL
      <input id = "url"
        placeholder="url" required
        value={url}
        onChange={(e) => setCreator({ ...creator, url: e.target.value })}
      />
      </label>
      <label for="description">
        Description
      <input id="description" required
        placeholder="description"
        value={description}
        onChange={(e) => setCreator({ ...creator, description: e.target.value })}
      />
      </label>
      <label for="imageURL">
        Image URL
      <input id="imageURL" required
        placeholder="www.example.com/image.png"
        value={imageURL}
        onChange={(e) => setCreator({ ...creator, imageURL: e.target.value })}
      />
      </label>
      <button onClick={createCreator}>Add Creator</button>
    </div>
    </form>
  );
  }