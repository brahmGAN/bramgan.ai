import React from 'react';
import './moving-left.css';

export default function movingLeft ({ data })
{
  return (
    <div style={{backgroundImage: `url(${data.image})`}} className='background-image'>
      <div className='headerMovingLeft'>
        <h2 style={{fontSize:'46px'}}>{data.title}</h2>
        <p style={{fontSize:'20px', fontWeight:'300px'}}>{data.para}</p>
        </div>
        <div className='overlay-container'>
        <div className='overlay-block moving-left1' style={{backgroundImage: `url(${data.image1})` , backgroundPosition:'center', objectFit:'cover'}}>
        <div className='overlays'>
            <h3 className='overlayttitle'>{data.title1}</h3>
            <p className='ocerlaycontent'>{data.content1}</p>
            <button className='learnm'>Learn More</button>
        </div>
        </div>
        
        <br />
        <div className='overlay-block moving-left1' style={{backgroundImage: `url(${data.image2})` , backgroundPosition:'center'}}>
        <div className='overlays'>
            <h3 className='overlayttitle'>{data.title2}</h3>
            <p className='overlaycontent'>{data.content2}</p>
            <button className='learnm'>Learn More</button>
        </div>
        </div>
        <br />
        <div className='overlay-block moving-left1' style={{backgroundImage: `url(${data.image3})` , backgroundPosition:'center'}}>
        <div className='overlays'>
            <h3 className='overlayttitle'>{data.title3}</h3>
            <p className='ocerlaycontent'>{data.content3}</p>
            <button className='learnm'>Learn More</button>
        </div>
        </div>
        </div>
    </div>
  );
};