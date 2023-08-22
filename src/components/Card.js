import React from 'react';

function Card(props) {
  //console.log("card: ", props)

  const clickHandler = () => console.log('clicked');

  return(
    <article>
        <header>{props.name}</header>
        {props.description}
        <footer></footer>
        <button onClick={clickHandler}></button>
    </article>
  )
}

export default Card