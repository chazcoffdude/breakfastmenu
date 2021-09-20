import React from "react";


const List = ({ answrs, revealer}) => {
  return answrs.map((questbox) => {                 //question
    const { id, type, price, name, info, image } = questbox;

    
    return (
      <article key={id} className="list">
      


        <img className="pfp" src={image} alt="sorry, pal"/>

       <div className="rfloat">
         <p>{price}</p>
          <p>{name}</p>
            <p className="answer">{info}</p>
        </div>

      </article>
      
    );
  });
};

export default List;
