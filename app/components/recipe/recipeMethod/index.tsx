'use client';

import { FC } from 'react';

interface Props {
  method: {
    fermentation: {
      temp: {
        value: number;
        unit: string;
      };
    };
    mash_temp: {
      temp: {
        value: number;
        unit: string;
      };
      duration: number;
    }[];
    twist: string | null;
  };
}

const RecipeMethod: FC<Props> = ({ method }) => {
  const { fermentation, mash_temp, twist } = method;
  return (
    <div className='grid gap-1'>
      <h2 className='text-xl font-bold'>Method</h2>
      <p>
        Fermentation Temperature:
        {fermentation.temp.value}
        {fermentation.temp.unit}
      </p>
      <h3 className='text-lg font-bold '>Mash Temp:</h3>
      <ul className='list-none'>
        {mash_temp.map((mash) => (
          <li key={mash.temp.value}>
            {mash.temp.value} {mash.temp.unit} for {mash.duration} minutes
          </li>
        ))}
      </ul>
      <p>Twist : {twist || 'None'}</p>
    </div>
  );
};

export default RecipeMethod;
