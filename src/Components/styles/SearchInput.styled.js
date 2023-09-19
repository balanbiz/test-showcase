"use client";
import { styled } from "styled-components";

export const StyledSearchInputWrap = styled.div`
    position: relative;
    width: 60%;
`;

export const StyledSearchInput = styled.input`
    height: 40px;
    width: 100%;
    padding: 10px 15px;
    color: #151515;
    border-radius: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    &:focus {
        outline: 3px solid cadetblue;
        cursor: auto;
    }
`;

export const SearchInputUl = styled.ul`
    position: absolute;
    top: 24px;
    left: 0;
    padding: 0 15px;
    background-color: #2f2f2f;
    width: 100%;
    border: 2px solid cadetblue;
    border-radius: 15px;
`;
