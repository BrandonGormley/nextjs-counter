import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <>
      <ul className='flex flex-row text-slate-100 justify-between'>
        <li className='nav-link'>
          <Link href='/'>Home</Link>
        </li>
        <li className='nav-link'>
          <Link href='/counterapp'>Counter App</Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
