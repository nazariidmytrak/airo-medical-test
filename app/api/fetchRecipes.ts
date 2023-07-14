import { RecipeProps } from '../interfaces/recipe';

export const fetchRecipes = async (page: number): Promise<RecipeProps[]> => {
  try {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?page=${page}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data: RecipeProps[] = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching data');
  }
};
