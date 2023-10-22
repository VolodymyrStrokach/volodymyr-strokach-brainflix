import React, { useState } from 'react';

function SideVideo(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <li
      className={`side-video__section__item ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <section className="side-video__img-section">
        <img className="side-video__img" src={props.image} alt="first video" />
      </section>
      <section className="side-video__description">
        <h5 className="side-video__title">{props.title}</h5>
        <p className="side-video__channel">{props.channel}</p>
      </section>
      
      {isClicked && (
        <div className="side-video__details">
        </div>
      )}
    </li>
  );
}

export default SideVideo;
