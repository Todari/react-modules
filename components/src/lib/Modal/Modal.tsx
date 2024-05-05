import * as Styled from './Modal.styled';

import Button from '../Button/Button';
import CLOSE_BUTTON from '../../asset/close-button.svg';

import { ButtonProps } from '../Button/Button';

interface ModalProps {
  isOpened: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: JSX.Element;
  modalPosition?: ModalPosition;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  buttonPosition?: ButtonPosition;
  primaryColor?: string;
  showCloseButton?: boolean;
}

const Modal = ({
  isOpened,
  onClose,
  title = '',
  description = '',
  children,
  modalPosition = 'center',
  primaryButton,
  secondaryButton,
  buttonPosition = 'row',
  primaryColor,
  showCloseButton = false,
}: ModalProps) => {
  if (isOpened) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'scroll';

  const handleKeyDownEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpened) {
      onClose();
    }

    document.body.removeEventListener('keydown', handleKeyDownEsc);
  };

  document.body.addEventListener('keydown', handleKeyDownEsc);

  return (
    <>
      {isOpened && (
        <Styled.DimmedLayer onClick={onClose}>
          <Styled.ModalContainer
            modalPosition={modalPosition}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Styled.ModalHeader>
              <Styled.ModalTitle>{title}</Styled.ModalTitle>
              {showCloseButton && (
                <Styled.ModalCloseButton
                  src={CLOSE_BUTTON}
                  onClick={onClose}
                />
              )}
            </Styled.ModalHeader>
            <Styled.ModalBody>
              <Styled.ModalDescription>{description}</Styled.ModalDescription>
              <div>{children}</div>
            </Styled.ModalBody>
            <Styled.ButtonContainer buttonPosition={buttonPosition}>
              {primaryButton && (
                <Button
                  text={primaryButton.text}
                  onClick={primaryButton.onClick}
                  size={primaryButton.size || 'medium'}
                  width={primaryButton.width || 'full'}
                  buttonStyle={primaryButton.buttonStyle || 'primary'}
                  primaryColor={
                    primaryColor || primaryButton.primaryColor || '#333333'
                  }
                />
              )}
              {secondaryButton && (
                <Button
                  text={secondaryButton.text}
                  onClick={secondaryButton.onClick || onClose}
                  size={secondaryButton.size || 'medium'}
                  width={secondaryButton.width || 'full'}
                  buttonStyle={secondaryButton.buttonStyle || 'border'}
                  primaryColor={
                    primaryColor || secondaryButton.primaryColor || '#333333'
                  }
                />
              )}
            </Styled.ButtonContainer>
          </Styled.ModalContainer>
        </Styled.DimmedLayer>
      )}
    </>
  );
};

export default Modal;
