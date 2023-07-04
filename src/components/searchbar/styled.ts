import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 13px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  max-width: 215px;
  min-width: 200px;
`;

export const InnerInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 80%;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;

  &::placeholder {
    color: #c4c4c4;
  }
`;
