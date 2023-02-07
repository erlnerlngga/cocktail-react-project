export interface CockstailsType {
  id: number;
  name: string;
  info: string;
  glass: string;
  image: string;
}

export interface CocktailDetailType extends CockstailsType {
  category: string;
  instructons: string;
  ingredients: string[];
}
