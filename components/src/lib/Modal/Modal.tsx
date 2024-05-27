import {
  ModalBody,
  ModalButtonContainer,
  ModalCloseButton,
  ModalContainer,
  ModalDescription,
  ModalDimmedLayer,
  ModalHeader,
  ModalInputField,
  ModalTitle,
} from './index';

interface ModalProp {
  children: JSX.Element;
}

const Modal = ({ children }: ModalProp) => {
  return <>{children}</>;
};

Modal.Body = ModalBody;
Modal.ButtonContainer = ModalButtonContainer;
Modal.CloseButton = ModalCloseButton;
Modal.Container = ModalContainer;
Modal.Description = ModalDescription;
Modal.DimmedLayer = ModalDimmedLayer;
Modal.Header = ModalHeader;
Modal.InputField = ModalInputField;
Modal.Title = ModalTitle;

export default Modal;
