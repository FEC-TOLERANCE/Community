import React from 'react';

function Author(props) {
  return (
    <div className='authorContainer'>
      <div className='authorDetails'>
        {props.backers.toLocaleString()} people are supporting {props.author}
      </div>
    </div>
  )
};

export default Author;