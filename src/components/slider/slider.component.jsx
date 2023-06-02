import React, { useState } from "react";
import "./slider.css";

const Slider = () => {
  const quotes = [
    {
      text: "Quote 1",
      author: "Author 1"
    },
    {
      text: "Quote 2",
      author: "Author 2"
    },
    {
      text: "Quote 3",
      author: "Author 3"
    },
    {
      text: "Quote 4",
      author: "Author 4"
    }
  ];

  const [index, setIndex] = useState(0);

  const handleNextClick = () => {
    setIndex((index + 1) % quotes.length);
  };

  const handlePrevClick = () => {
    setIndex((index - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className="slider">
      <div className="slides" style={{ transform: `translateX(${-index * 100}%)` }}>
        {quotes.map((quote, i) => (
          <div className="slide" key={i}>
            <div className="text">{quote.text}</div>
            <div className="author">{quote.author}</div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrevClick}>
       &lt;
      </button>
      <button className="next" onClick={handleNextClick}>
         &gt;
      </button>
    </div>
  );
};

export default Slider;

{/*<section className='sec5'>
          <h1>"</h1>
          <div>
           <p>Using brahmGAN's NeRF solutions for our VR Services, we were able to quickly create stunning worlds in matter days. Defenetily going to incoporate thier entire stack in our workflow in future.</p>
          <h5>Manju M, Project Manager</h5>
          <h5>Taanga Studios</h5>
        </div>
        <div>
           <p>"Never thought AI could be usesful in our site. Been a game changer since we integrated 3D Assets for site.”</p>
          <h5>Claire Brooks, MI</h5>
        </div>
        <div>
           <p>"Never thought AI could be usesful in our site. Been a game changer since we integrated 3D Assets for site.”</p>
          <h5>Claire Brooks, MI</h5>
        </div>
</section>*/}