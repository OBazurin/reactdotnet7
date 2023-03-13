import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {Button, Header, List} from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:5000/api/activities")
        .then(response => {
          setActivities(response.data);
          console.log(response.data);
        })
  }, [])
  
  return (
    <div>
    <Header as='h2' icon='sign-out' content='REACT ACTIVITIES!'/>        
          <List>
              {activities.map((act: any) => (
                  <List.Item key={act.id}>{act.title}</List.Item>
              ))}
          </List>
    </div>
  );
}

export default App;
