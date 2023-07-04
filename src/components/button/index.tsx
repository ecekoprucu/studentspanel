import React from 'react';

import * as Styled from './styled';

type Props = {
  buttonText: string;
  onClick?: () => void;
};

export const CustomButton = ({ buttonText, onClick }: Props) => {
  return (
    <Styled.CustomButton onClick={onClick}>
      <Styled.CustomButtonText>{buttonText}</Styled.CustomButtonText>
    </Styled.CustomButton>
  );
};
