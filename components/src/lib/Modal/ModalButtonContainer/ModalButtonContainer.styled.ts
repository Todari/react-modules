import styled from 'styled-components';
import { ButtonPosition } from '../../types/types';

export const StyledButtonContainer = styled.div<{
  buttonPosition: ButtonPosition;
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.buttonPosition === 'row' ? 'row-reverse' : 'column'};
  gap: 12px;
`;
