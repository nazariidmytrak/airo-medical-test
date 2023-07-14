export interface RecipeProps {
  id: number;
  name: string;
  tagline: string;
  description: string;
  abv: number;
  attenuation_level: number;
  boil_volume: {
    value: number;
    unit: string;
  };
  brewers_tips: string;
  contributed_by: string;
  ebc: number;
  first_brewed: string;
  ibu: number;
  ph: number;
  srm: number;
  target_fg: number;
  target_og: number;
  volume: {
    value: number;
    unit: string;
  };
  ingredients: {
    malt: {
      name: string;
      amount: {
        value: number;
        unit: string;
      };
    }[];
    hops: {
      name: string;
      amount: {
        value: number;
        unit: string;
      };
      add: string;
      attribute: string;
    }[];
    yeast: string;
  };
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
  food_pairing: string[];
  image_url: string;
}
