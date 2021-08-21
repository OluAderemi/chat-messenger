import React from 'react';
import './style.css';

/**
* @author
* @function Card
**/

export const Card = (props) => {
  return(
    <div className="card">
        {props.children}
    </div>
   )

 }

 export default Card