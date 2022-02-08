import { ModalProps } from '../Modal/types'
import { FoodContent } from '../Food/types'

export interface ModalAddFoodProps extends Omit<ModalProps, 'children'> {
  handleAddFood: (food: FoodContent) => void;
}