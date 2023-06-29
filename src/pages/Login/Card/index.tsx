import React from "react";
import * as Styled from "./styled";
import { CustomForm as Form } from "../Form";

export const Card = () => { 
    return (
       <Styled.Container>
            <Styled.Title>MANAGE COURSES</Styled.Title>
            <Styled.SubTitle>SIGN IN</Styled.SubTitle>
            <Styled.SubText>Enter your credentials to access your account</Styled.SubText>
            <br />
            <Form />
       </Styled.Container>
    );
}