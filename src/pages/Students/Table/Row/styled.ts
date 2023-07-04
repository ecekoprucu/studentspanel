import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr 0.5fr;
  grid-gap: 15px;
  background: #ffffff;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  align-items: center;
`;

export const ColText = styled.p`
  font-family: 'Montserrat' sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  word-wrap: break-word;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-evenly;
`;
