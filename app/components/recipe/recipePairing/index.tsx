'use client';

import { FC } from 'react';

interface Props {
  foodPairing: string[];
}

const RecipePairing: FC<Props> = ({ foodPairing }) => {
  return (
    <div>
      <h2 className='text-xl font-bold'>Food Pairing</h2>
      <ul className='list-none'>
        {foodPairing.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipePairing;
