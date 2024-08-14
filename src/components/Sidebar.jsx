import React from 'react';

export default function Sidebar(props) {
  const { isOpen, handleToggleModal } = props;

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div onClick={handleToggleModal} className='bgOverlay'></div>
        <div className='sidebarContents'>
          <h2>The Beautiful Carina Nebula</h2>
          <div>
            <p>Description</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              nostrum cupiditate sunt quis magni nesciunt assumenda est sequi!
              Perferendis itaque tempora cupiditate optio labore ratione porro
              laborum assumenda, illo aut.
            </p>
          </div>
          <button onClick={handleToggleModal}>
            <i className='fa-solid fa-circle-chevron-right'></i>
          </button>
        </div>
      </div>
      {isOpen && <div className='bgOverlay' onClick={handleToggleModal}></div>}
    </>
  );
}
