import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Layout } from 'src/components/layout';

import * as Styled from './styled';
import { InnerHeader } from './InnerHeader';
import { Table } from './Table';
import { Pagination } from './Pagination';
import DataContext from 'src/context/studentContext';
import { ContextType } from 'src/utils/types';

export const Students = () => {
  const { students, setStudents, totalData, setTotalData } = useContext(
    DataContext,
  ) as ContextType;
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(5);

  const [searchText, setSearchText] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (searchText.length > 0) {
      setPageIndex(0);
    }
  }, [searchText]);

  useEffect(() => {
    if (location.state === 'updated') return;

    fetch(
      `https://dummyjson.com/users${
        searchText.length > 0 ? '/search?q=' + searchText : ''
      }${
        `${searchText.length > 0 ? '&' : '?'}limit=${selectedSize}&skip=` +
        pageIndex * selectedSize +
        '&select=firstName,lastName,maidenName,email,phone,company,domain,image'
      }`,
    ).then((response) => {
      response.json().then((data) => {
        setStudents(data.users);
        setTotalData(data.total);
      });
    });

    if (!searchText.length) {
      fetch('https://dummyjson.com/users')
        .then((res) => res.json())
        .then((res) => setTotalData(res.total));
    }
  }, [searchText, pageIndex, selectedSize, totalData]);

  useEffect(() => {
    if (location.state === 'updated') {
      navigate('/students', { state: undefined });
    }
  }, [navigate, location.state]);

  return (
    <Layout>
      <Styled.Container>
        <InnerHeader searchText={searchText} setSearchText={setSearchText} />
        {students.length > 0 && <Table students={students} />}
        {students.length === 0 && <div>No Data...</div>}

        <Styled.PaginationWrappeer>
          <Pagination
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
