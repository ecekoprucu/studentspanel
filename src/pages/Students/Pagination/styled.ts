import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
`;

export const SizeContainer = styled.div`
  display: flex;
`;

export const SizeSelectBox = styled.select<{ src: string }>`
  border: 0;
  background: transparent;
  font-family: 'Mulish', sans-serif;
  outline: none;
  color: #4b506d;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.30000001192092896px;
  width: 55px;
  padding: 5px;
  border-radius: 5px;
  background: url(${(props) => props.src}) no-repeat right transparent;
  appearance: none;
  -webkit-appearance: none;
  background-position-x: 25px;
`;

export const Text = styled.p`
  font-family: 'Mulish', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.30000001192092896px;
  color: #9fa2b4;
`;

export const PaginationArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60px;
`;

export const PaginationArrow = styled.button`
  border: 0;
  background: transparent;
  outline: none;
`;
