'use client';

import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button className='bg-red-400 p-3 rounded-xl text-white' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
