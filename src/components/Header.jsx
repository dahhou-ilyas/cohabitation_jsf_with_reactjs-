import React from 'react';

const Header = ({ itemCount }) => {
  return (
    <div className='custom-toolbar'>
      <span className='header-title'>Mon Application</span>
      <p className='header-count'>Nombre d'éléments : {itemCount}</p>
    </div>
  );
};

export default Header;
