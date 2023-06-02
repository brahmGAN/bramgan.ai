import React from 'react';
import './solutionsection3.css'

export default function solutionSection3 ({ data })
{
  
  return (
    <div className='section3'>
        <h1 className='title'>{data.title}</h1>
        <p className='subtitle'>{data.subtitle}</p>
    </div>
  );
};

