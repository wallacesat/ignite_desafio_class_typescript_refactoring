export interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactElement
}