import React from 'react';

const Header = ({ itemCount }) => {
  return (
    <div className='flex p-4 font-mono font-bold text-2xl text-white justify-between h-16 bg-sky-700' >
      <span className=''>Gestionnaire d'elements </span>
      <p className=''>Nombre d'éléments : {itemCount}</p>
    </div>
  );
};

export default Header;
