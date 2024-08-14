import React from 'react';

export default function Sidebar(props) {
  const { isOpen, handleToggleModal, data } = props;

  function formatDate(dateString) {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${month}/${day}/${year}`;
  }

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div onClick={handleToggleModal} className='bgOverlay'></div>
        <div className='sidebarContents'>
          <h2>{data?.title}</h2>
          <div>
            <p className='date'>{formatDate(data?.date)}</p>
            <p className='description'>{data?.explanation}</p>
            <div className='copyright'>
              <i className='fa-regular fa-copyright'></i>
              <p>{data?.copyright}</p>
            </div>
          </div>
          <button onClick={handleToggleModal}>
            <i className='fa-solid fa-circle-chevron-right closeBtn'></i>
          </button>
        </div>
      </div>
      {isOpen && <div className='bgOverlay' onClick={handleToggleModal}></div>}
    </>
  );
}
