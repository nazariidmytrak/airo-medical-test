'use client';

import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className='max-w-[2520px] mx-auto px-4 sm:px-2 md:px-10 xl:px-20'>
      {children}
    </div>
  );
};

export default Container;
