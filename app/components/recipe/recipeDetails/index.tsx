'use client';

import { FC } from 'react';

interface Props {
  abv: number;
  attenuationLevel: number;
  boilVolume: {
    value: number;
    unit: string;
  };
  volume: {
    value: number;
    unit: string;
  };
  brewersTips: string;
  contributedBy: string;
  ebc: number;
  firstBrewed: string;
  ibu: number;
  id: number;
  ph: number;
  srm: number;
  targetFG: number;
  targetOG: number;
  twist: string | null;
}

const RecipeDetails: FC<Props> = ({
  abv,
  attenuationLevel,
  boilVolume,
  brewersTips,
  contributedBy,
  ebc,
  firstBrewed,
  ibu,
  id,
  ph,
  srm,
  targetFG,
  targetOG,
  volume,
  twist,
}) => {
  return (
    <div className='grid gap-1'>
      <h2 className='text-xl font-bold'>Details</h2>
      <ul className='grid gap-2'>
        <li>ABV: {abv}</li>
        <li>Attenuation Level: {attenuationLevel}</li>
        <li>
          Boil Volume: {boilVolume.unit} {boilVolume.value}
        </li>
        <li>Brewers Tips: {brewersTips}</li>
        <li>Contributed By: {contributedBy}</li>
        <li>EBC: {ebc}</li>
        <li>First Brewed: {firstBrewed}</li>
        <li>IBU: {ibu}</li>
        <li>ID: {id}</li>
        <li>pH: {ph}</li>
        <li>SRM: {srm}</li>
        <li>Target FG: {targetFG}</li>
        <li>Target OG: {targetOG}</li>
        <li>
          Volume: {volume.value} {volume.unit}
        </li>
        <li>Twist: {twist || 'None'}</li>
      </ul>
    </div>
  );
};

export default RecipeDetails;
