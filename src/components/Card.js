import React from 'react';

function Card(props) {
  //console.log("card: ", props)

  return(
    <div className = "card">
      <h3> {props.name} </h3>
      <p> {props.url} </p>
      <p> {props.description} </p> 
      <p> {props.imageURL} </p>
    </div> 
    
  )
}

export default Card