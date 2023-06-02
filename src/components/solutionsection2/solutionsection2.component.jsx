import React from 'react';
import './solutionsection2.css';

export default function solutionSection1 ({ data })
{
  return (
    <div style={{backgroundImage: `url(${data.image})`}} className='image-container'>
        <h1 className='maintitle'>{data.title}</h1>
        <div className='text-container'>
        <div className='text-block'>
            <h3 className='contenttitle'>{data.title1}</h3>
            <p className='content'>{data.content1}</p>
        </div>
        
        <br />
        <div className='text-block'>
            <h3 className='contenttitle'>{data.title2}</h3>
            <p className='content'>{data.content2}</p>
        </div>
        <br />
        <div className='text-block'>
            <h3 className='contenttitle'>{data.title3}</h3>
            <p className='content'>{data.content3}</p>
        </div>
        </div>
    </div>
  );
};