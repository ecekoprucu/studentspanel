import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from 'src/components/layout';

import { Form } from 'src/components/form';

export const Edit = () => {
  const { id } = useParams();

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
      <Form id={id} />
    </Layout>
  );
};
