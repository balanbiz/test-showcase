"use client";
import StyledComponentsRegistry from "../lib/registry";
import GlobalStyles from "@/Components/styles/Global";

const Providers = ({ children }) => {
    return (
        <StyledComponentsRegistry>
            <GlobalStyles />
            {children}
        </StyledComponentsRegistry>
    );
};

export default Providers;
