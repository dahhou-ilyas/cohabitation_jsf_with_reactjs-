// Search.js

import React, { useEffect, useState } from 'react';

const Search = ({socket, dataFrom,setItemCount }) => {
  const [data, setData] = useState(dataFrom || []);
  const [searchQuery,setSearchQuery]=useState("");

  useEffect(() => {
    if(!socket){
      const ws = new WebSocket('ws://localhost:8080/jsf2-1.0-SNAPSHOT/websocket');
      ws.onopen = () => {
        console.log('WebSocket connected 11');
      };

      ws.onmessage = (event) => {
        console.log(event.data);
        const receivedData = JSON.parse(event.data);
        setData(prevData => prevData.concat(receivedData));
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      ws.onclose = () => {
        console.log('WebSocket disconnected 11');
      };


      const handleMessage = (event) => {
        if (event.origin !== 'http://localhost:8080') return;
        setSearchQuery(event.data)
      };

      //add event message
      window.addEventListener('message', handleMessage);

      return () => {
        window.removeEventListener('message', handleMessage);
        ws.close();
      };
    }else{
      socket.onmessage = (event) => {
        console.log("ilyas dddd");
        const receivedData = JSON.parse(event.data);
        setData(prevData => {
          return prevData.concat(receivedData)
        });
        setItemCount(prev=>prev+1)
        return () => {
          socket.close();
        }; 

      };
    }
    
  }, []);



  const filteredData = data.filter(item => {
    const nameMatch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const descriptionMatch = item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return nameMatch || descriptionMatch;
  });

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
          {filteredData.map((element, index) => (
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
