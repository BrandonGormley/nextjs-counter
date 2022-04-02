import React from 'react';
import Nav from '../app/common/components/Nav.jsx';

const index = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-slate-900'>
      <h1 className='text-slate-100'>Can you count?</h1>
      <Nav />
    </div>
  );
};

export default index;
