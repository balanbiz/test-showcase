import GamesGrid from "@/Components/GamesGrid";
import RAWGService from "@/services/RAWG";
import { Container } from "@/Components/styles/Container.styled";
// Styled
import { StyledMainPage, StyledMainPageH1, StyledMainPageDivider } from "@/Components/styles/MainPage.styled";

export default async function Home() {
    const RAWG = new RAWGService();
    const gamesData = await RAWG.getGames();

    return (
        <StyledMainPage>
            <Container className="containerGamesGrid">
                <StyledMainPageH1>Find Your Game</StyledMainPageH1>
                <StyledMainPageDivider />
                <GamesGrid gamesData={gamesData} />
            </Container>
        </StyledMainPage>
    );
}
