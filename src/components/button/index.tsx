import React from "react";

import * as Styled from "./styled";

type Props = {
    buttonText: string;
}

export const CustomButton = ({buttonText}: Props) => {
    return (
        <Styled.CustomButton>
            <Styled.CustomButtonText>{buttonText}</Styled.CustomButtonText>
        </Styled.CustomButton>
    )
}