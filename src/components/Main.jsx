import React from 'react';

export default function Main(props) {
  const { data } = props;

  return (
    <div className='imageContainer'>
      <img
        src={data.hdurl}
        alt={data.title || 'background image'}
        className='bgImage'
      />
    </div>
  );
}
