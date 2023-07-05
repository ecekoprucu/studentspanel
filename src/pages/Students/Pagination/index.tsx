import React, { ChangeEvent, useContext } from 'react';

import * as Styled from './styled';
import DataContext from 'src/context/studentContext';
import { ContextType } from 'src/utils/types';

type Props = {
  pageIndex: number;
  setPageIndex: (pageIndex: number) => void;
  selectedSize: number;
  setSelectedSize: (selectedSize: number) => void;
};

const sizes = [5, 6, 7, 8, 9, 10];

export const Pagination = ({
  pageIndex,
  setPageIndex,
  selectedSize,
  setSelectedSize,
}: Props) => {
  const { totalData } = useContext(DataContext) as ContextType;

  const lastPage =
    totalData % selectedSize === 0
      ? Math.floor(totalData / selectedSize) - 1
      : Math.floor(totalData / selectedSize);

  const handlePageChange = (clickSide: string) => {
    switch (clickSide) {
      case 'left':
        if (pageIndex > 0) {
          setPageIndex(pageIndex - 1);
          return;
        }
        return;

      case 'right':
        if (pageIndex < lastPage) {
          setPageIndex(pageIndex + 1);
          return;
        }
        return;
    }
  };

  return (
    <Styled.Container>
      <Styled.SizeContainer>
        <Styled.Text>Rows per page:</Styled.Text>
        <Styled.SizeSelectBox
          src={process.env.PUBLIC_URL + '/assets/dropdown.svg'}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            setPageIndex(0);
            setSelectedSize(Number(event.target.value));
          }}
        >
          {sizes.map((size) => (
            <option key={size}>{size}</option>
          ))}
        </Styled.SizeSelectBox>
      </Styled.SizeContainer>
      <Styled.Text>
        {pageIndex * selectedSize + 1}-
        {pageIndex !== lastPage ? (pageIndex + 1) * selectedSize : totalData} of{' '}
        {totalData}
      </Styled.Text>
      <Styled.PaginationArrowWrapper>
        <Styled.PaginationArrow onClick={() => handlePageChange('left')}>
          <img
            style={{
              cursor: pageIndex === 0 ? 'not-allowed' : 'pointer',
            }}
            src={process.env.PUBLIC_URL + '/assets/left.svg'}
            alt="left"
          />
        </Styled.PaginationArrow>
        <Styled.PaginationArrow onClick={() => handlePageChange('right')}>
          <img
            style={{
              cursor: pageIndex === lastPage ? 'not-allowed' : 'pointer',
            }}
            src={process.env.PUBLIC_URL + '/assets/right.svg'}
            alt="right"
          />
        </Styled.PaginationArrow>
      </Styled.PaginationArrowWrapper>
    </Styled.Container>
  );
};
