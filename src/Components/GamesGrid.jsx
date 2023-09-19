"use client";
import { useState, useEffect } from "react";
import GameCard from "./GameCard";
import SortOptions from "./SortOption";
import GamesFilters from "./GamesFilters";
import { StyledGamesGrid, StyledDivider } from "./styles/GamesGrid.styled";
import { StyledGamesFiltersAndSorts } from "./styles/GamesFiltersAndSorts.styled";
import { debounce } from "@/lib/debounce";
import RAWGService from "@/services/RAWG";

const GamesGrid = ({ gamesData }) => {
    const [originalGamesList, setOriginalGamesList] = useState(gamesData);
    const [gamesList, setGamesList] = useState(gamesData);
    const [currentPage, setCurrentPage] = useState(1);
    const [isFetching, setIsFetching] = useState(false);
    const RAWG = new RAWGService();

    // Sort handle

    const handleSortOptionChange = option => {
        if (option !== "") {
            switch (option) {
                case "ratingAsc":
                    sortGamesList().ratingAsc();
                    break;
                case "ratingDesc":
                    sortGamesList().ratingDesc();
                    break;
                case "releaseDateAsc":
                    sortGamesList().releaseDateAsc();
                    break;
                case "releaseDateDesc":
                    sortGamesList().releaseDateDesc();
                    break;
                default:
                    break;
            }
        }
    };

    function sortGamesList() {
        const ratingAsc = () => {
            setGamesList(prevGamesList => [...prevGamesList].sort((a, b) => a.rating - b.rating));
        };

        const ratingDesc = () => {
            setGamesList(prevGamesList => [...prevGamesList].sort((a, b) => b.rating - a.rating));
        };

        const releaseDateAsc = () => {
            setGamesList(prevGamesList => [...prevGamesList].sort((a, b) => new Date(a.released) - new Date(b.released)));
        };

        const releaseDateDesc = () => {
            setGamesList(prevGamesList => [...prevGamesList].sort((a, b) => new Date(b.released) - new Date(a.released)));
        };

        return { ratingAsc, ratingDesc, releaseDateAsc, releaseDateDesc };
    }

    // Filters handle

    const [checkboxes, setCheckboxes] = useState({
        PC: false,
        PlayStation: false,
        Xbox: false,
    });

    useEffect(() => {
        filterDataByCheckboxes(originalGamesList, checkboxes);
        handleSortOptionChange(document.getElementById("sortOptions").value);
    }, [checkboxes, originalGamesList]);

    function filterDataByCheckboxes(data, checkboxes) {
        const filteredData = data.filter(item => {
            if (checkboxes.PC && !item.platforms.includes("PC")) {
                return false;
            }
            if (checkboxes.PlayStation && !item.platforms.includes("PlayStation")) {
                return false;
            }
            if (checkboxes.Xbox && !item.platforms.includes("Xbox")) {
                return false;
            }
            return true;
        });
        setGamesList(filteredData);
    }

    function handleCheckboxChange(checkboxName) {
        setCheckboxes(prevCheckboxes => ({
            ...prevCheckboxes,
            [checkboxName]: !prevCheckboxes[checkboxName],
        }));
    }

    // Pagination

    const loadMoreData = async () => {
        if (isFetching) return;

        setIsFetching(true);

        try {
            await RAWG.getGames(currentPage + 1).then(res => {
                setGamesList(prevGamesList => [...prevGamesList, ...res]);
                setOriginalGamesList(prevGamesList => [...prevGamesList, ...res]);
                handleSortOptionChange(document.getElementById("sortOptions").value);
                setCurrentPage(currentPage + 1);
            });
        } catch (error) {
            console.error("Somethig went wrong while loading data:", error);
        }

        setIsFetching(false);
    };

    const handleScroll = debounce(() => {
        if (isFetching) return;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;

        if (windowHeight + scrollTop >= documentHeight - 200) {
            loadMoreData();
        }
    }, 300);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [currentPage]);

    return (
        <StyledGamesGrid>
            <StyledGamesFiltersAndSorts>
                <GamesFilters handleCheckboxChange={handleCheckboxChange} checkboxes={checkboxes} />
                <StyledDivider />
                <SortOptions onSelectOption={handleSortOptionChange} />
            </StyledGamesFiltersAndSorts>
            {gamesList.map(gameData => (
                <GameCard key={gameData.id} gameData={gameData} />
            ))}
        </StyledGamesGrid>
    );
};
export default GamesGrid;
