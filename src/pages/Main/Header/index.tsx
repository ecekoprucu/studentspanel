import React from 'react';

export const Header = () => {
  return (
    <div
      style={{
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 30px',
      }}
    >
      <img
        width={18}
        height={18}
        src={process.env.PUBLIC_URL + '/assets/back.svg'}
        alt="Back"
      />
      <img
        width={18}
        height={18}
        src={process.env.PUBLIC_URL + '/assets/bell.svg'}
        alt="Notification"
      />
    </div>
  );
};
