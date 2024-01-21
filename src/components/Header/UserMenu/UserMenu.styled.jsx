import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";


export const List = styled.ul`
  display: flex;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
