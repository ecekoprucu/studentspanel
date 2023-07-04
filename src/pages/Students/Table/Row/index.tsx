import React from 'react';

import { Student } from 'src/utils/types';
import * as Styled from './styled';

export const Row = ({
  image,
  firstName,
  maidenName,
  lastName,
  email,
  phone,
  domain,
  company,
}: Student) => {
  return (
    <Styled.Container>
      <img
        style={{
          borderRadius: 8,
          backgroundColor: '#c4c4c4',
        }}
        width={65}
        height={55}
        src={image}
        alt={firstName}
      />
      <Styled.ColText>
        {firstName} {maidenName} {lastName}
      </Styled.ColText>
      <Styled.ColText>{email}</Styled.ColText>
      <Styled.ColText>{phone}</Styled.ColText>
      <Styled.ColText>{domain}</Styled.ColText>
      <Styled.ColText>{company.name}</Styled.ColText>
      <Styled.ActionsContainer>
        <img
          style={{
            cursor: 'pointer',
          }}
          src={process.env.PUBLIC_URL + '/assets/edit.svg'}
          alt="edit"
        />
        <img
          style={{
            cursor: 'pointer',
          }}
          src={process.env.PUBLIC_URL + '/assets/delete.svg'}
          alt="delete"
        />
      </Styled.ActionsContainer>
    </Styled.Container>
  );
};
