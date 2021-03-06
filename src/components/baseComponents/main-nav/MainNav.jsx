import React, { useContext } from "react";

import { StyledMainNav } from "./style";
import NavItem from "../mainnav-item/NavItem";
import { ThemeContext } from "../../../contexts/ThemeContext";

const MainNav = props => {
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  return (
    <StyledMainNav activeTheme={theme}>
      <NavItem title="Home"> </NavItem>
      <NavItem title="Search"> </NavItem>
      <NavItem title="About"> </NavItem>
    </StyledMainNav>
  );
};

export default MainNav;
