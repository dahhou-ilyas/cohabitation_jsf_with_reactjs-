import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddElement = ({ setData }) => {
  // Récupérer le compteur d'éléments du local storage lors du démarrage
  const initialItemCount = parseInt(localStorage.getItem('itemCount') || '0', 10);
  const [itemCount, setItemCount] = useState(initialItemCount);

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Incrémenter le compteur d'éléments
    const newItemCount = itemCount + 1;

    // Mettre à jour le local storage directement avant de naviguer
    localStorage.setItem('itemCount', newItemCount.toString());

    // Mettre à jour le compteur dans le state
    setItemCount(newItemCount);

    // Mettre à jour les données avec le nouvel élément
    setData((prev) => [...prev, { name, date, description }]);

    // Créer les paramètres d'URL pour la navigation
    const queryParams = new URLSearchParams({
      name,
      date,
      description,
    });

    // Naviguer vers une URL avec les paramètres
    navigate({
      pathname: '/search',
      search: `?${queryParams.toString()}`,
    });

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
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddElement;
