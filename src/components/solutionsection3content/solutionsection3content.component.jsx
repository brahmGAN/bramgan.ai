import React from 'react';
import './solutionsection3content.css'

export default function solutionSection3Content ({ data })
{
  return (
    <>
     <div className='content'>
            <div className='container1'>
                <h2 className='contentTitle'>{data.contenttitle}</h2>
                <p className='pBox'>{data.content}</p>
                <button className='btn1'>Contact Us for Demo</button>
            </div>
            <div>
                <iframe className='iframeBox' src={data.iframe} title={' '} scrolling='no'  />
            </div>
        </div>
        </>
  )
}