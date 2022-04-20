import React from 'react';


const Card = (props) => {
  return (
    <div className="max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
      {props.children}
    </div>
  );
};

export default Card;
