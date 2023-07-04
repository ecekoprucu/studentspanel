import React from 'react';
import { Layout } from 'src/components/layout';

import { Form } from 'src/components/form';

export const Add = () => {
  return (
    <Layout>
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Add Student
      </h1>
      <Form type="add" />
    </Layout>
  );
};
