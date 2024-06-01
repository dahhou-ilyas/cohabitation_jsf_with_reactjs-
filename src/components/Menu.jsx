import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className='flex flex-col text-2xl  mt-5  '>
        <Link className="h-12 text-center ml-2  font-mono w-80 text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800 " to="/">Accueil</Link>
        <Link className='h-12 text-center ml-2   font-mono w-80 text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800 ' to="/add">Ajouter un élément</Link>
        <Link className='h-12 text-center ml-2   font-mono w-80 text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800 ' to="/search">Visualiser</Link>
    </nav>
  );
};

export default Menu;
