import React from 'react';

import * as Styled from './styled';
import { Student } from 'src/utils/types';
import { Row } from './Row';

type Props = {
  students: Student[];
};

export const Table = ({ students }: Props) => {
  return (
    <Styled.Container>
      <Styled.TableHeader>
        <Styled.TableHeaderText />
        <Styled.TableHeaderText>Name</Styled.TableHeaderText>
        <Styled.TableHeaderText>Email</Styled.TableHeaderText>
        <Styled.TableHeaderText>Phone</Styled.TableHeaderText>
        <Styled.TableHeaderText>Website</Styled.TableHeaderText>
        <Styled.TableHeaderText>Company Name</Styled.TableHeaderText>
        <Styled.TableHeaderText />
      </Styled.TableHeader>
      <Styled.TableBody>
        {!!students &&
          students.map((student) => <Row {...student} key={student.id} />)}
      </Styled.TableBody>
    </Styled.Container>
  );
};
