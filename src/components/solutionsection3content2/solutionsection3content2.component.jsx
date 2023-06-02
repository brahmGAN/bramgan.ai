import React from 'react';
import './solutionsection3content2.css'

export default function solutionSection3Content ({ data })
{
  return (
    <div className='content1'>
    <section>
        <iframe className='iframeBox' src={data.iframe} title={' '} />
    </section>
    <br />
    <div className='container3'>
        <h2 className='contentTitle'>{data.contenttitle}</h2>
        <p className='pBox'>{data.content}</p>
        <button className='btn1' >Contact Us for Demo</button>
    </div>
</div>
  )
}