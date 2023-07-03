import React from 'react';
import { ReactComponent as Students } from './icons/students.svg';
import { ReactComponent as Bookmark } from './icons/bookmark.svg';
import { ReactComponent as Payment } from './icons/payment.svg';
import { ReactComponent as User } from './icons/user.svg';

import * as Styled from './styled';

type Props = {
  title: string;
  count: number | string;
  color: string;
  addition?: string;
};

export const Section = ({ title, count, color, addition }: Props) => {
  const handleIcon = () => {
    switch (title) {
      case 'Students':
        return <Students />;
      case 'Course':
        return <Bookmark />;
      case 'Payments':
        return <Payment />;
      case 'Users':
        return <User />;
    }
  };

  return (
    <Styled.Container
      to={`/${title.toLowerCase()}`}
      style={{
        background: color,
      }}
    >
      <div>
        {handleIcon()}
        <Styled.Title text={title}>{title}</Styled.Title>
      </div>
      <Styled.CountWrapper>
        <h2
          style={{
            fontFamily: 'Montserrat',
            color: 'black',
            fontSize: 30,
            marginBottom: 0,
          }}
        >
          {count}
        </h2>
        {!!addition && <Styled.Addition>{addition}</Styled.Addition>}
      </Styled.CountWrapper>
    </Styled.Container>
  );
};
