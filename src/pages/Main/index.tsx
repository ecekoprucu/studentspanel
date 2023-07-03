import React from 'react';
import { Section } from './Section';
import { Layout } from '../../components/layout';

import * as Styled from './styled';

export const Main = () => {
  return (
    <Layout>
      <Styled.SectionContainer>
        <Section title="Students" color="#F0F9FF" count={243} />
        <Section title="Course" color="#FEF6FB" count={243} />
        <Section
          title="Payments"
          color="#FEFBEC"
          count="556,000"
          addition="₺"
        />
        <Section
          title="Users"
          color="linear-gradient(110.42deg, #FEAF00 18.27%, #F8D442 91.84%)"
          count={243}
        />
      </Styled.SectionContainer>
    </Layout>
  );
};
