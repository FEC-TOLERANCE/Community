import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Origin from './Components/Origin.jsx';
import Backers from './Components/Backers.jsx';
import Author from './Components/Author.jsx';

function Community() {
  const [backers, setBackers] = useState(0);
  const [locations, setLocation] = useState([]);
  const [author, setAuthor] = useState('');
  const [newBackers, setNewBackers] = useState(0);

  useEffect(() => {
    let currentUrl = window.location.href.split('/');
    let projectId = currentUrl[3];

    axios.get(`http://ec2-54-67-1-177.us-west-1.compute.amazonaws.com:3000/community/${projectId}`)
      .then(locations => {
        setLocation(locations.data);
      })
      .catch(err => {
        throw new Error(err);
      })

      axios.get(`http://3.12.73.115:3004/funding/${projectId}`)
        .then(headerInfo => {
          let numOfBackers = headerInfo.data.backing.backers, percentNewBackers = headerInfo.data.backing.newFundersPercent;

          setNewBackers(percentNewBackers);
          setBackers(numOfBackers);
        })
        .catch(err => {
          throw new Error(err);
        })

      axios.get(`http://ec2-3-15-177-95.us-east-2.compute.amazonaws.com:3003/project-owner/${projectId}`)
        .then(projectOwnerInfo => {
          let authorName = projectOwnerInfo.data.name;

          setAuthor(authorName);
        })
        .catch(err => {
          throw new Error(err);
        })
  }, [])

  return (
    <div>
      <Author author = {author} backers = {backers}/>
      <Origin locations = {locations} backers = {backers}/>
      <Backers backers = {backers} newBackers = {newBackers}/>
    </div>
  )
}

ReactDOM.render(<Community />, document.getElementById('community'));