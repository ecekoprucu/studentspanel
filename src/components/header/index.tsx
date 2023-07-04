import React from 'react';

import * as Styled from './styled';

export const Header = () => {
  return (
    <Styled.Container>
      <img
        width={18}
        height={18}
        src={process.env.PUBLIC_URL + '/assets/back.svg'}
        alt="Back"
      />
      <img
        width={17}
        height={20}
        src={process.env.PUBLIC_URL + '/assets/bell.svg'}
        alt="Notification"
      />
    </Styled.Container>
  );
};
