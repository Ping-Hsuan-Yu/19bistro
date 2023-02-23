import React from "react";
import styled from "@emotion/styled";

const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
    margin: 1.25rem;
`;

const PageTitle = ({ title }) => {
    return <Title>{title}</Title>;
};

export default PageTitle;
