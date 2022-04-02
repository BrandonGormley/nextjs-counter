import React from 'react';
import Nav from '../app/common/components/Nav';
import Counter from '../app/features/counter/Counter';

const counterapp = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-slate-900'>
      <Counter />
      <Nav />
    </div>
  );
};

export default counterapp;
