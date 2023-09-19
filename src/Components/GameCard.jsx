import { StyledGameCard, StyledGameCardImg, StyledGameCardName, StyledGameCardRatingAndDate } from "./styles/GameCard.styled";
import RatingSVG from "../../public/svg/RatingSVG";
import Link from "next/link";

const GameCard = ({ gameData: { id, name, platforms, poster, rating, released } }) => {
    return (
        <StyledGameCard>
            <Link href={`game/${id}`}>
                <StyledGameCardImg quality={30} src={poster} alt={poster} width={400} height={300} />
            </Link>
            <StyledGameCardName>{name}</StyledGameCardName>
            <StyledGameCardRatingAndDate>
                <span>
                    {rating}
                    <RatingSVG />
                </span>
                <span>{released}</span>
            </StyledGameCardRatingAndDate>
        </StyledGameCard>
    );
};
export default GameCard;
