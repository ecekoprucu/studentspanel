import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  padding: 13px;
  margin-bottom: 20px;
  transition: 0.3s;
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
