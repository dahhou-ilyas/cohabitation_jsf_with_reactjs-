import React, { useEffect, useState } from 'react';


const Search = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleMessage = (event) => {
      if(! event.data.type){
        if(event.data){
          const jsonResponse=JSON.parse(event.data)
          setData(jsonResponse);
        }
      }
      
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div>
      <h1>Recherche</h1>
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
