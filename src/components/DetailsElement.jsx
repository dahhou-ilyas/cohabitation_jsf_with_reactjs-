import React, { useEffect, useState } from 'react'


function DetailsElement() {
    const [idd,setIdd]=useState('')
    const [nomm,setNomm]=useState('');
    const [desc,setDesc]=useState('');
    const [dateURL,setDateURL]=useState('');

    useEffect(()=>{
        const queryParams = new URLSearchParams(window.location.search);
        setIdd(queryParams.get('id'))
        setNomm(queryParams.get('name'))
        setDesc(queryParams.get('description'))
        setDateURL(queryParams.get('date'))
    },[])

  return (
    <div>
      <h1>Détails de l'Élément</h1>
      <p className='totalName'><span className='kle'>id:</span> <span className='contentDetals'>{idd}</span></p>
      <p className='totalName'><span className='kle'>Nom:</span> <span className='contentDetals'>{nomm}</span></p>
      <p className='totalName'><span className='kle'>Description:</span> <span className='contentDetals'>{desc}</span></p>
      <p className='totalName'><span className='kle'>Description:</span> <span className='contentDetals'>{dateURL}</span></p>
    </div>
  );
}

export default DetailsElement