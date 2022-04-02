import React from 'react';

const Counter = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-slate-200 text-3xl my-4'>0</p>
      <div className='flex flex-row'>
        <button className='btn'>Minus</button>
        <button className='btn'>Reset</button>
        <button className='btn'>Plus</button>
      </div>
    </div>
  );
};

export default Counter;
