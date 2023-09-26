import Image from "next/image";
import styled from "styled-components";

export const StyledGameCard = styled.div`
    max-width: 400px;
    width: 100%;
    height: 275px;
    padding: 10px 10px 15px 10px;
    border: 2px solid cadetblue;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #242424;
    margin: 0 auto;
`;

export const StyledGameCardImg = styled(Image)`
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 10px;
    align-self: baseline;
`;

export const StyledGameCardName = styled.div`
    letter-spacing: 1px;
    font-size: 18px;
    text-align: center;
`;

export const StyledGameCardRatingAndDate = styled.div`
    * {
        padding: 0 5px;
    }
    font-size: 18px;
`;
