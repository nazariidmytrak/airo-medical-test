import { create } from 'zustand';

import { RecipeProps } from '../interfaces/recipe';

interface BeerStoreState {
  recipes: RecipeProps[];
  setRecipes: (data: RecipeProps[]) => void;
}

const useRecipesStore = create<BeerStoreState>((set) => ({
  recipes: [],
  setRecipes: (data) => set({ recipes: data }),
}));

export default useRecipesStore;
