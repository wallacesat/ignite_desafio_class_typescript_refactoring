import { ModalProps } from '../Modal/types'
import { FoodContent } from '../Food/types'

export interface ModalEditFoodProps extends Omit<ModalProps, 'children'> {
  handleUpdateFood: (food: FoodContent) => void;
  editingFood: FoodContent;
}