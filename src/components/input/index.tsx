import React, { useState } from 'react';
import * as Styled from './styled';

type Props = {
  inputValue?: string;
  label: string;
  type: string;
};

export const Input = ({ inputValue, label, type }: Props) => {
  const [value, setValue] = useState<string>(inputValue || '');

  return (
    <Styled.InputWrapper>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Input
        type={type}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
      />
    </Styled.InputWrapper>
  );
};
