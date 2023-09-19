"use client";
import { Container } from "./styles/Container.styled";
import {
    StyledGamePageCard,
    StyledGamePageCardImg,
    StyledGamePageCardH1,
    StyledGamePageCardDescr,
    StyledGamePageCardLink,
} from "./styles/GamePageCard.styled";

import GamePageCardSlider from "./GamePageCardSlider";

const GamePageCard = ({ gameData: { id, name, poster, description, website }, gameScreenShots }) => {
    return (
        <StyledGamePageCard>
            <Container>
                <StyledGamePageCardImg src={poster} alt={poster} />
                <StyledGamePageCardH1>{name}</StyledGamePageCardH1>
                <StyledGamePageCardDescr>{description}</StyledGamePageCardDescr>
                <StyledGamePageCardLink href={website}>Link to oficial site: {website}</StyledGamePageCardLink>
                {gameScreenShots.count >= 2 ? <GamePageCardSlider gameScreenShots={gameScreenShots} /> : null}
            </Container>
        </StyledGamePageCard>
    );
};
export default GamePageCard;
