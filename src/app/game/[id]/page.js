import RAWGService from "@/services/RAWG";
import GamePageCard from "@/Components/GamePageCard";

const RAWG = new RAWGService();

const GamePage = async ({ params: { id } }) => {
    const gameData = await RAWG.getGameData(id);
    const gameScreenShots = await RAWG.getGameScreenShots(id);
    return <GamePageCard gameData={gameData} gameScreenShots={gameScreenShots} />;
};
export default GamePage;
