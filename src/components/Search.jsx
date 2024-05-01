import React from 'react';

const Search = () => {
  const elements = [
    // Exemple de données, vous pouvez les obtenir via une API
    { name: 'Element 1', date: '2024-05-01', description: 'Description 1' },
    { name: 'Element 2', date: '2024-05-02', description: 'Description 2' },
  ];

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
          {elements.map((element, index) => (
            <tr key={index}>
              <td>{element.name}</td>
              <td>{element.date}</td>
              <td>{element.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
