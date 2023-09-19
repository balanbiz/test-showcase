import { StyledGameFilters, StyledGameFiltersLabel, StyledGameFiltersInput, StyledGameFiltersH3 } from "./styles/GamesFilters.styled";
const GamesFilters = ({ handleCheckboxChange, checkboxes }) => {
    return (
        <StyledGameFilters>
            <StyledGameFiltersH3>Filter by platform</StyledGameFiltersH3>
            <StyledGameFiltersLabel>
                PC
                <StyledGameFiltersInput type="checkbox" id="pc" checked={checkboxes.pc} onChange={() => handleCheckboxChange("PC")} />
            </StyledGameFiltersLabel>
            <br />
            <StyledGameFiltersLabel>
                PS
                <StyledGameFiltersInput
                    type="checkbox"
                    id="ps"
                    checked={checkboxes.ps}
                    onChange={() => handleCheckboxChange("PlayStation")}
                />
            </StyledGameFiltersLabel>
            <br />
            <StyledGameFiltersLabel>
                XBox
                <StyledGameFiltersInput type="checkbox" id="xbox" checked={checkboxes.xbox} onChange={() => handleCheckboxChange("Xbox")} />
            </StyledGameFiltersLabel>
        </StyledGameFilters>
    );
};
export default GamesFilters;
