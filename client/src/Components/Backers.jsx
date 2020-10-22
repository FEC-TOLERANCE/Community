import React, { useState, useEffect } from 'react';

function Backers (props) {
  const [newBackers, setNew] = useState(0);
  const [returningBackers, setReturning] = useState(0);

  useEffect(() => {
    let numOfNewBackers = Math.floor(props.backers * props.newBackers), numOfReturningBackers = props.backers - numOfNewBackers;

    setNew(numOfNewBackers.toLocaleString());
    setReturning(numOfReturningBackers.toLocaleString());
  }, [props.backers]);

  return (
    <div id='backerContainer'>
      <div className='backerSection'>
        <div className='backerTypes'>
          <div className='newBackers'>
            <h4>New Backers</h4>
            <div className='count'>{newBackers}</div>
            <div className='description'>backers had never backed a project on Kickstarter before</div>
          </div>
          <div className='oldBackers'>
            <h4>Returning Backers</h4>
            <div className='count'>{returningBackers}</div>
            <div className='description'>backers had backed a project on Kickstarter before</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Backers;