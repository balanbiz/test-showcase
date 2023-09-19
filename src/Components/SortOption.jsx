"use client";
import React, { useState } from "react";
import {
    StyledGamesSortOptions,
    StyledGamesSortOptionsH4,
    StyledGamesSortOptionsSelect,
    StyledGamesSortOptionsOption,
} from "./styles/GamesSortOptions.styled";

const SortOptions = ({ onSelectOption }) => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = event => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        onSelectOption(selectedValue);
    };

    return (
        <StyledGamesSortOptions>
            <StyledGamesSortOptionsH4 htmlFor="sortOptions">Sort games by: </StyledGamesSortOptionsH4>
            <StyledGamesSortOptionsSelect id="sortOptions" value={selectedOption} onChange={handleOptionChange}>
                <StyledGamesSortOptionsOption value="">Select option</StyledGamesSortOptionsOption>
                <StyledGamesSortOptionsOption value="ratingAsc">Rating (ascend)</StyledGamesSortOptionsOption>
                <StyledGamesSortOptionsOption value="ratingDesc">Rating (descend)</StyledGamesSortOptionsOption>
                <StyledGamesSortOptionsOption value="releaseDateAsc">Reliese date (oldest)</StyledGamesSortOptionsOption>
                <StyledGamesSortOptionsOption value="releaseDateDesc">Reliese date (closest)</StyledGamesSortOptionsOption>
            </StyledGamesSortOptionsSelect>
        </StyledGamesSortOptions>
    );
};

export default SortOptions;
