import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  border-radius: 8px;
  padding: 20px;
  text-decoration: none;
`;

export const Title = styled.p<{ text: string }>`
  color: ${(props) => (props.text === 'Users' ? '#FFFFFF' : '#6C6C6C')};
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`;

export const CountWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Addition = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin: 0px 0px 3px 3px;
  color: black;
  align-self: flex-end;
`;
