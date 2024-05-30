// Search.js

import React, { useEffect, useState } from 'react';

const Search = ({ dataFrom }) => {
  const [data, setData] = useState(dataFrom || []);

  useEffect(() => {
    const handleMessage = (event) => {
      
      if (!event.data.type) {
        
        if (event.data instanceof Array) {
          console.log(event);
          setData(prev => [...prev, ...event.data]);
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Met à jour `data` lorsque `dataFrom` change
  useEffect(() => {
    if (dataFrom) {
      setData(dataFrom);
    }
  }, [dataFrom]);

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
        <tbody>
          {data.map((element, index) => (
            <tr key={index}>
              <td>{element?.name}</td>
              <td>{element?.date}</td>
              <td>{element?.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
