import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  padding: 12px 30px;
  background: #f2eae1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15vw;
  overflow: hidden;
  justify-content: space-evenly;
  position: fixed;
`;

export const HeaderTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  border-left: 6px solid #f8d442;
  padding-left: 12.5px;
  margin-top: 0;
`;

export const AvatarImg = styled.img`
  border-radius: 100%;
  min-width: 100%;
`;

export const Name = styled.h2`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
`;

export const Role = styled.p`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: #feaf00;
`;

export const LogoutButton = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  width: 150px;
  display: flex;
  justify-content: space-evenly;
  background: none;
  border: none;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  color: #000000;
`;
