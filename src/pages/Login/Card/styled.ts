import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 2px 5px 10px 0px #0000001a;
  align-items: center;
  align-self: center;
  justify-content: center;
  justify-self: center;
  width: fit-content;
`;

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: center;
  border-left: 6px solid #f8d442;
  padding-left: 12.5px;
`;

export const SubTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0em;
  margin-bottom: 0px;
`;

export const SubText = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  color: #6c6c6c;
`;
