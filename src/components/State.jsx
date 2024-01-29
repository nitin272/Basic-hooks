import React, { useState, useEffect } from 'react';

function State({ para }) {
  const [content, setContent] = useState(' ');
  const [likes, setLikes] = useState(0);

  const toggle = () => setContent(prevContent => prevContent === ' ' ? para : ' ');
  const Likes = () => setLikes(prevLikes => prevLikes + 1);

  useEffect(() => {
    alert('Button clicked');
  }, [content]);

  return (
    <div>
      <h3>{content}</h3>
      <button onClick={toggle}>Content</button>
      <h4>{likes}</h4>
      <button onClick={Likes}>Like</button>
    </div>
  );
}

export default State;
