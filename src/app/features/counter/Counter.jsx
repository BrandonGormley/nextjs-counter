import React, { useEffect } from 'react';
import { minus, reset, plus, closeMessage } from './counterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const { count, message } = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();

  const handleMinus = () => {
    dispatch(minus());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handlePlus = () => {
    dispatch(plus());
  };

  const handleCloseMessage = () => {
    dispatch(closeMessage());
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleCloseMessage();
    }, 1500);

    return () => clearTimeout(timeout);
  });

  return (
    <div className='flex flex-col justify-center items-center'>
      {message.length > 0 && (
        <p className='text-indigo-200 shadow-md shadow-indigo-700 py-1 px-4 rounded-md text-sm my-4'>
          {message}
        </p>
      )}
      <p className='text-slate-200 text-3xl my-4'>{count}</p>
      <div className='flex flex-row'>
        <button onClick={handleMinus} className='btn'>
          Minus
        </button>
        <button onClick={handleReset} className='btn'>
          Reset
        </button>
        <button onClick={handlePlus} className='btn'>
          Plus
        </button>
      </div>
    </div>
  );
};

export default Counter;
