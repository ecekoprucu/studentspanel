import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from 'src/components/input';
import { CustomButton } from 'src/components/button';
import * as Styled from './styled';

export const CustomForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/dashboard');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: '100%',
      }}
    >
      <Input label="Email" type="text" />
      <br />
      <Input label="Password" type="password" />
      <br />
      <CustomButton buttonText="Sign In" />
      <br />
      <br />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Styled.Text>Forgot your password?</Styled.Text>
        <Link to="/">
          <Styled.Text color="#FEAF00" weight={500} decorate={+true}>
            Reset Password
          </Styled.Text>
        </Link>
      </div>
    </form>
  );
};
