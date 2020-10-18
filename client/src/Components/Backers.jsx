import React, { useState, useEffect } from 'react';

function Backers (props) {
  const [newBackers, setNew] = useState(0);
  const [returningBackers, setReturning] = useState(0);

  useEffect(() => {
    let newBackers = Math.random(), returningBackers = 1 - newBackers;
    let numOfNewBackers = Math.floor(props.backers * newBackers), numOfReturningBackers = props.backers - numOfNewBackers;

    setNew(numOfNewBackers);
    setReturning(numOfReturningBackers);
  }, [props.backers]);

  return (
    <div>
      Backers
    </div>
  )
}

export default Backers;