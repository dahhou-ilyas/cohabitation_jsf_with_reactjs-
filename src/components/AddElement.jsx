import React, { useState } from 'react';

const AddElement = ({ setItemCount, setData }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, date, description };
    setItemCount(prevCount => prevCount + 1);
    setData(prev => [...prev, newItem]);

    // Envoyer le message à l'application parent (JSF)
    window.parent.postMessage(newItem, '*');


    setName('');
    setDate('');
    setDescription('');
  };

  return (
    <div className="container">
      <h1 className="title">Ajouter un nouvel élément</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Nom:</label>
          <input
            type="text"
            className="input"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Date:</label>
          <input
            type="date"
            className="input"
            value={date}
            onChange={e => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Description:</label>
          <textarea
            className="textarea"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button">Ajouter</button>
      </form>
    </div>
  );
};

export default AddElement;
