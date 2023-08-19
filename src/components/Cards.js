import React from 'react';
import Card from './Card';

function Cards(props) {
  return (
    <>
      <ul className = 'card-list'>
      <li> <Card 
              name={props.name}
              url={props.url}
              description={props.description}
              imageURL={props.imageURL}
              /> </li>
      </ul>
    </>
  )
}

export default Cards