import React from 'react';
import './solutionsection1.css'

export default function solutionSection1 ({ data })
{
  return (
    <>
    <div className='section1'>
        <h1 className='title'>{data.title}</h1>
            <div className='row'>
                <div className='column'>
                    <img className='img' src={data.image} alt={''} />
                </div>
                <div className='column'>
                    <div className='content'>{data.description}</div>
                </div>
            </div>
            <br />
            <div className='row'>
                <button className='btn'>Request Demo</button>
            </div>
            <br />
            <div className='row'>
                <iframe className='iframe' src={data.iframe} title={' '} />
            </div>
            </div>
        </>
  );
};