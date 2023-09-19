"use client";

import { useEffect, useState, useRef } from "react";
import RAWGService from "@/services/RAWG";
const RAWG = new RAWGService();
import SearchInputLi from "./SearchInputLi";
import { StyledSearchInput, StyledSearchInputWrap, SearchInputUl } from "./styles/SearchInput.styled";

const SearchInput = () => {
    const [text, setText] = useState("");
    const [gamesdata, setGamesdata] = useState([]);
    const debounceTimeout = useRef(null);

    useEffect(() => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(getSearchResponse, 600);

        return () => {
            clearTimeout(debounceTimeout.current);
        };
    }, [text]);

    function getSearchResponse() {
        if (text.length > 2) {
            RAWG.searchGames(text).then(res => {
                console.log(res);
                setGamesdata(res);
            });
        } else {
            setGamesdata([]);
        }
    }

    return (
        <StyledSearchInputWrap>
            <StyledSearchInput
                type="text"
                name="search"
                value={text}
                onChange={e => setText(e.target.value)}
                autoComplete="off"
                placeholder="Enter the game you search"
            />
            {gamesdata.length != 0 ? (
                <SearchInputUl>
                    {gamesdata.results.slice(0, 3).map((game, key) => (
                        <SearchInputLi key={key} name={game.name} id={game.id} />
                    ))}
                </SearchInputUl>
            ) : null}
        </StyledSearchInputWrap>
    );
};
export default SearchInput;
