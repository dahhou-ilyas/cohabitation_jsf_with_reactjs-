import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className='sidemenue'>
        <Link className='alink' to="/">Accueil</Link>
        <Link className='alink' to="/add">Ajouter un élément</Link>
        <Link className='alink' to="/search">Recherche</Link>
    </nav>
  );
};

export default Menu;
