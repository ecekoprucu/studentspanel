import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from 'src/components/layout';

import { Form } from 'src/components/form';
import { Student } from 'src/utils/types';

export const Edit = () => {
  const { id } = useParams();

  const [studentData, setStudentData] = useState({} as Student);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/users/${id}?select=firstName,lastName,maidenName,email,phone,company,domain,image`,
    ).then((response) => {
      response.json().then((data) => {
        setStudentData(data);
      });
    });
  }, [id]);

  return (
    <Layout>
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        {' '}
        Edit Student #{id}{' '}
      </h1>
      <Form data={studentData} />
    </Layout>
  );
};
