import styled from 'styled-components';

type Props = {
  color?: string;
  weight?: number;
  decorate?: number;
};

export const Text = styled.p<Props>`
  font-family: 'Montserrat', sans-serif;
  font-family: Montserrat;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0em;
  color: ${(props) => (props.color ? props.color : '#6C6C6C')};
  font-weight: ${(props) => (props.weight ? props.weight : '400')};
  text-decoration: ${(props) => (props.decorate ? 'underline' : 'none')};
  margin-left: ${(props) => (props.decorate ? '5px' : '0px')};
`;
