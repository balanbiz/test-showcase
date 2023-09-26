import styled from "styled-components";

export const StyledGamePageSliderWrap = styled.div`
    position: relative;
    padding: 20px 0;
    max-width: 400px;
    min-width: 200px;
    margin: 0 auto;
    @media (max-width: 570px) {
        padding-top: 75px;
    }
`;

export const StyledSliderArrowLeft = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -12%;
    cursor: pointer;
    @media (max-width: 570px) {
        top: 15%;
        left: 32%;
    }
`;

export const StyledSliderArrowRight = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 100%;
    cursor: pointer;
    @media (max-width: 570px) {
        top: 15%;
        left: 54%;
    }
`;

export const StyledGamePageSliderImg = styled.img`
    width: 100%;
    object-fit: cover;
    padding: 0 5px;
    user-select: none;
`;
