import React from 'react';

export default function Footer(props) {
  const { handleToggleModal } = props;

  return (
    <footer>
      <div className='bgGradient'></div>
      <div>
        <h2>The Beautiful Carina Nebula</h2>
        <h1>Astronomy Picture of the Day Project</h1>
      </div>
      <button onClick={handleToggleModal}>
        <i className='fa-solid fa-circle-info'></i>
      </button>
    </footer>
  );
}
