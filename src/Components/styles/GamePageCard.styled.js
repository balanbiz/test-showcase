import { styled } from "styled-components";

export const StyledGamePageCard = styled.section`
    padding: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const StyledGamePageCardImg = styled.img`
    display: block;
    margin: 0 auto;
    max-width: 50%;
`;

export const StyledGamePageCardH1 = styled.h1`
    text-align: center;
`;

export const StyledGamePageCardDescr = styled.p`
    text-align: center;
`;

export const StyledGamePageCardLink = styled.a`
    display: block;
    text-align: center;
    color: white;
    text-decoration: inherit;
    &:hover {
        color: lightblue;
    }
`;
