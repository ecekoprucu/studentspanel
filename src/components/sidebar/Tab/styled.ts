import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)<{ active: string | undefined }>`
  width: 200px;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  padding: 13px;
  margin-bottom: 20px;
  text-decoration: none;
  color: #000000;
  transition: 0.3s;
  border: 0;
  background: ${(props) => (props.active ? '#feaf00' : 'transparent')};
  &:hover {
    background: #feaf00;
    cursor: pointer;
  }
`;

export const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100px;
  align-items: center;
`;

export const TabText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  margin-left: 15px;
  text-align: left;
`;
