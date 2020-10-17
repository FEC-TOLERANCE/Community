import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Origin from './Components/Origin.jsx';

function Community() {
  const [backers, setBackers] = useState(0);
  const [locations, setLocation] = useState([]);

  useEffect(() => {
    let currentUrl = window.location.href.split('/');
    let projectId = currentUrl[3];

    axios.get(`http://localhost:3000/community/${projectId}`)
      .then(locations => {
        setLocation(locations.data);
      })
      .catch(err => {
        throw new Error(err);
      })

      axios.get(`http://localhost:3004/funding/${projectId}`)
        .then(headerInfo => {
          console.log(headerInfo);
          let numOfBackers = headerInfo.data.backing.backers;
          setBackers(numOfBackers);
        })
        .catch(err => {
          throw new Error(err);
        })
  }, [])

  return (
    <div>
      <Origin locations = {locations} backers = {backers}/>
    </div>
  )
}

ReactDOM.render(<Community />, document.getElementById('community'));