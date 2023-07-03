import React from 'react';
import { useMatch } from 'react-router-dom';
import * as Styled from './styled';
import { handleRouteNameMatch } from 'src/utils/handleRouteNameMatch';

type Props = {
  icon: string;
  text: string;
};

export const Tab = ({ icon, text }: Props) => {
  const activeRoute = useMatch(`/${handleRouteNameMatch(text)}`);

  return (
    <Styled.Container active={activeRoute?.pathname}>
      <Styled.InnerWrapper>
        <img width={17} height={20} src={icon} alt={text} />
        <Styled.TabText>{text}</Styled.TabText>
      </Styled.InnerWrapper>
    </Styled.Container>
  );
};
