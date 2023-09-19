import { useState } from "react";
import {
    StyledGamePageSliderWrap,
    StyledGamePageSliderImg,
    StyledSliderArrowLeft,
    StyledSliderArrowRight,
} from "@/Components/styles/GamePageCardSlider.styled";

import SliderArrow from "../../public/svg/SliderArrow";
const GamePageCardSlider = ({ gameScreenShots }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function onRotate(side, x) {
        if (side === "right") {
            setCurrentImageIndex(prevIndex => (prevIndex === gameScreenShots.results.length - 1 ? 0 : prevIndex + 1));
        } else if (side === "left") {
            setCurrentImageIndex(prevIndex => (prevIndex === 0 ? gameScreenShots.results.length - 1 : prevIndex - 1));
        }
    }

    return (
        <StyledGamePageSliderWrap>
            <StyledSliderArrowLeft onClick={() => onRotate("left")}>
                <SliderArrow />
            </StyledSliderArrowLeft>
            <StyledSliderArrowRight onClick={() => onRotate("right")}>
                <SliderArrow rotation={"right"} />
            </StyledSliderArrowRight>
            <StyledGamePageSliderImg
                src={gameScreenShots.results[currentImageIndex].image}
                alt={gameScreenShots.results[currentImageIndex].image}
            />
        </StyledGamePageSliderWrap>
    );
};
export default GamePageCardSlider;
