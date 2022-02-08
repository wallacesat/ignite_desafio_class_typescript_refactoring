export type FoodContent = {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

export interface FoodProps {
  food: FoodContent;
  handleEditFood: (food: FoodContent) => void;
  handleDelete: (idFood: number) => void;
}