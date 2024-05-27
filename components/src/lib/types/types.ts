export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonWidth = 'fixed' | 'fit' | 'full';
export type ButtonStyle = 'primary' | 'border' | 'text';
export type ButtonPosition = 'row' | 'column';
export type ModalSize = 'small' | 'medium' | 'large';
export type ModalPosition = 'center' | 'bottom';

export interface DefaultModalProps {
  size?: ModalSize;
  isOpened: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  modalPosition?: ModalPosition;
  buttonPosition?: ButtonPosition;
  primaryColor?: string;
  showCloseButton?: boolean;
}
