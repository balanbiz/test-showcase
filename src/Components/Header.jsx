import SearchInput from "./SearchInput";
import { StyledHeader, HeaderLogo, ContainerHeader } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";

const Header = () => {
    return (
        <StyledHeader>
            <Container className="containerHeader">
                <HeaderLogo>LOGO</HeaderLogo>
                <SearchInput />
            </Container>
        </StyledHeader>
    );
};
export default Header;
