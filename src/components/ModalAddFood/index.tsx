import  * as React from 'react';
import { FormHandles } from '@unform/core';
import { FiCheckSquare } from 'react-icons/fi';

import { Modal } from '../Modal';
import { Input } from '../Input';

import { FoodContent } from '../Food/types';
import { ModalAddFoodProps } from './types';
import { Form } from './styles';

export function ModalAddFood(props: ModalAddFoodProps) {

  const { isOpen, onRequestClose, handleAddFood } = props;

  const formRef = React.createRef<FormHandles>();

  const handleSubmit = async (data: FoodContent) => {
    handleAddFood(data);
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};
