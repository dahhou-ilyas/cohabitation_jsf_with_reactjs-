// Search.js

import React, { useEffect, useState } from 'react';

const Search = ({socket, dataFrom }) => {
  const [data, setData] = useState(dataFrom || []);

  useEffect(() => {
    if(!socket){
      const ws = new WebSocket('ws://localhost:8080/jsf2-1.0-SNAPSHOT/websocket');
      ws.onopen = () => {
        console.log('WebSocket connected');
      };
    
      ws.onmessage = (event) => {
        const receivedData = JSON.parse(event.data);
        setData(prevData => prevData.concat(receivedData));
      };
    
      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
    
      ws.onclose = () => {
        console.log('WebSocket disconnected');
      };
    
      return () => {
        ws.close();
      };
    }
    
  }, []);

  return (
    <div>
      <h1>Visualisation des Données</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        {data && 
          <tbody>
          {data.map((element, index) => (
            <tr key={index}>
              <td>{element?.name}</td>
              <td>{element?.date}</td>
              <td>{element?.description}</td>
            </tr>
          ))}
        </tbody>
        }
        
      </table>
    </div>
  );
};

export default Search;
