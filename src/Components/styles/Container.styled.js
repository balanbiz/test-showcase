"use client";
import styled from "styled-components";

export const Container = styled.div`
    max-width: 1230px;
    padding: 0 15px;
    margin: 0 auto;
    &.containerHeader {
        display: flex;
        justify-content: space-around;
        align-items: center;
        @media (max-width: 767px) {
            flex-direction: column;
            * {
                padding: 5px;
                text-align: center;
                width: 100%;
            }
        }
    }
`;
