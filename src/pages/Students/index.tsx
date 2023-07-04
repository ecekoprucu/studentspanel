import React, { useState, useEffect } from 'react';

import { Layout } from 'src/components/layout';

import * as Styled from './styled';
import { InnerHeader } from './InnerHeader';
import { Table } from './Table';
import { Pagination } from './Pagination';

export const Students = () => {
  const [students, setStudents] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [totalData, setTotalData] = useState(0);
  const [selectedSize, setSelectedSize] = useState(5);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch(
      `https://dummyjson.com/users${
        searchText.length > 0 ? '/search?q=' + searchText : ''
      }${
        searchText.length > 0
          ? ''
          : `?limit=${selectedSize}&skip=` +
            pageIndex * selectedSize +
            '&select=firstName,lastName,maidenName,email,phone,company,domain,image'
      }`,
    ).then((response) => {
      response.json().then((data) => {
        setStudents(data.users);
      });
    });

    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((res) => setTotalData(res.total));
  }, [searchText, pageIndex, selectedSize]);

  if (students.length === 0) {
    return (
      <Layout>
        <Styled.Container>No Data...</Styled.Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Styled.Container>
        <InnerHeader searchText={searchText} setSearchText={setSearchText} />
        <Table students={students} />
        <Styled.PaginationWrappeer>
          <Pagination
            totalData={totalData}
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        </Styled.PaginationWrappeer>
      </Styled.Container>
    </Layout>
  );
};
