import styled from "styled-components";

export const StyledGameFilters = styled.div``;

export const StyledGameFiltersH3 = styled.h3`
    margin: 10px 5px 15px 5px;
`;

export const StyledGameFiltersLabel = styled.label`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    line-height: 0;
    font-size: 20px;
    letter-spacing: 2px;
    cursor: pointer;
    &:hover {
        color: black;
        text-decoration: underline;
    }
    user-select: none;
`;

export const StyledGameFiltersInput = styled.input`
    display: block;
    width: 20px;
    height: 20px;
    outline: 2px black solid;
`;
