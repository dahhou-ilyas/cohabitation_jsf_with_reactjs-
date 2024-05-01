import React, { useState } from 'react';

const AddElement = ({ setItemCount,setData }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour ajouter un nouvel élément ici
    // Mettre à jour le compteur d'éléments
    setItemCount(prevCount => prevCount + 1);
    setData(prev=>[...prev,{name:name,date:date,description:description}])
    // Réinitialiser les valeurs du formulaire
    setName('');
    setDate('');
    setDescription('');
  };

  return (
    <div>
      <h1>Ajouter un nouvel élément</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} required />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddElement;
