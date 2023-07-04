import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from 'src/components/input';
import { CustomButton } from 'src/components/button';
import * as Styled from './styled';

export const CustomForm = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (formRef.current?.elements[0] as HTMLInputElement).value;
    const password = (formRef.current?.elements[1] as HTMLInputElement).value;

    if (email.length > 0 && password.length > 0) {
      navigate('/dashboard');
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
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
