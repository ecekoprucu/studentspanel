import React, { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CustomButton } from '../button';
import * as Styled from './styled';
import { Input } from '../input';
import { ContextType, Student } from 'src/utils/types';
import DataContext from 'src/context/studentContext';

type Props = {
  data?: Student;
  type?: string;
};

export const Form = ({ data, type }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const { students, setStudents } = useContext(DataContext) as ContextType;

  if (!data?.id && !type) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h3>...</h3>
      </div>
    );
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!type && data?.id) {
      fetch(`https://dummyjson.com/users/${data.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: (formRef.current?.elements[0] as HTMLInputElement).value,
          maidenName: (formRef.current?.elements[1] as HTMLInputElement).value,
          lastName: (formRef.current?.elements[2] as HTMLInputElement).value,
          email: (formRef.current?.elements[3] as HTMLInputElement).value,
          phone: (formRef.current?.elements[4] as HTMLInputElement).value,
          domain: (formRef.current?.elements[5] as HTMLInputElement).value,
          company: {
            ...data.company,
            name: (formRef.current?.elements[6] as HTMLInputElement).value,
          },
          image: (formRef.current?.elements[7] as HTMLInputElement).value,
        }),
      })
        .then((response) => {
          response.json().then((data) => {
            const dummyData = students.map((student) => {
              return student.id === data.id ? data : student;
            });

            setStudents(dummyData);
            navigate('/students', {
              state: 'updated',
            });
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }

    if (type === 'add') {
      const dummyStudent = {
        id: students.length,
        firstName: (formRef.current?.elements[0] as HTMLInputElement).value,
        maidenName: (formRef.current?.elements[1] as HTMLInputElement).value,
        lastName: (formRef.current?.elements[2] as HTMLInputElement).value,
        email: (formRef.current?.elements[3] as HTMLInputElement).value,
        phone: (formRef.current?.elements[4] as HTMLInputElement).value,
        domain: (formRef.current?.elements[5] as HTMLInputElement).value,
        company: {
          address: {
            address: 'dummy address',
            city: 'dummy city',
            coordinates: {
              lat: 36,
              lng: 24,
            },
            postalCode: 'dummy postal code',
            state: 'dummy state',
          },
          department: 'dummy department',
          title: 'dummy title',
          name: (formRef.current?.elements[6] as HTMLInputElement).value,
        },
        image: (formRef.current?.elements[7] as HTMLInputElement).value,
      };

      setStudents([...students, dummyStudent]);
      navigate('/students', {
        state: 'updated',
      });
    }
  };

  return (
    <div>
      <Styled.Form ref={formRef} onSubmit={handleSubmit}>
        <Styled.InputContainer>
          <Input
            label="First Name"
            type="text"
            inputValue={data && data.firstName}
          />
        </Styled.InputContainer>
        <br />
        <Styled.InputContainer>
          <Input
            label="Maiden Name"
            type="text"
            inputValue={data && data.maidenName}
          />
        </Styled.InputContainer>
        <br />
        <Styled.InputContainer>
          <Input
            label="Last Name"
            type="text"
            inputValue={data && data.lastName}
          />
        </Styled.InputContainer>
        <br />
        <Styled.InputContainer>
          <Input label="Email" type="text" inputValue={data && data.email} />
        </Styled.InputContainer>
        <br />
        <Styled.InputContainer>
          <Input
            label="Phone Number"
            type="tel"
            inputValue={data && data.phone}
          />
        </Styled.InputContainer>
        <br />
        <Styled.InputContainer>
          <Input label="Website" type="text" inputValue={data && data.domain} />
        </Styled.InputContainer>
        <br />
        <Styled.InputContainer>
          <Input
            label="Company"
            type="text"
            inputValue={data && data.company.name}
          />
        </Styled.InputContainer>
        <br />
        <Styled.InputContainer>
          <Input
            label="Image Url"
            type="text"
            inputValue={data && data.image}
          />
        </Styled.InputContainer>
        <br />
        <br />
        <CustomButton buttonText="Submit" />
      </Styled.Form>
    </div>
  );
};
