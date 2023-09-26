import styled from "styled-components";

export const StyledGamesGrid = styled.div`
    padding: 20px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
    grid-gap: 20px;
`;

export const StyledDivider = styled.div`
    width: 80%;
    height: 3px;
    background-color: cadetblue;
`;
