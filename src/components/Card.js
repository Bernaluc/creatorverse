import React from 'react';

function Card(props) {
  //console.log("card: ", props)

  return(
    <div className = "card">
      <h3> {props.name} </h3>
      <h6> {props.url} </h6>
      <p> {props.description} </p> 
      <h2> {props.imageURL} </h2>
    </div> 
    
  )
}

export default Card