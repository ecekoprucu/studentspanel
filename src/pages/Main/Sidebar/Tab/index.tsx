import React from 'react';
import * as Styled from './styled';

type Props = {
  icon: string;
  text: string;
};

export const Tab = ({ icon, text }: Props) => {
  return (
    <Styled.Container>
      <Styled.InnerWrapper>
        <img width={17} height={20} src={icon} alt={text} />
        <Styled.TabText>{text}</Styled.TabText>
      </Styled.InnerWrapper>
    </Styled.Container>
  );
};
