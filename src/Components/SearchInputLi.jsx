import Link from "next/link";
import { usePathname } from "next/navigation";
import { StyledSearchInputLi } from "./styles/SearchInputLi.styled";

const SearchInputLi = ({ name, id }) => {
    const pathname = usePathname();
    let targetPath;

    if (pathname === "/") {
        targetPath = `/game/${id}`;
    } else if (pathname.startsWith("/game/")) {
        targetPath = `/game/${id}`;
    }

    return (
        <Link href={targetPath}>
            <StyledSearchInputLi>{name}</StyledSearchInputLi>
        </Link>
    );
};
export default SearchInputLi;
