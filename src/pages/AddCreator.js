import React from 'react';

export default function AddCreator() {

  
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
  return(
    <div className="App">
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