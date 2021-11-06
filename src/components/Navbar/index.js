import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const NavLinks = styled.ul`
  display: flex;
  width: 100%;
  list-style-type: none;
`;

const NavLink = styled.li`
  text-decoration: none;
  position: relative;
  left: 30rem;
  font-family: Gordita;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: gray;
  padding: 0px 1rem 0px 1rem;
`;

export default function Navbar() {
  return (
    <div>
      <NavbarContainer>
        <div>SafeGaming</div>
        <NavLinks>
          <NavLink>Developers</NavLink>
          <NavLink>Network</NavLink>
          <NavLink>Validators</NavLink>
          <NavLink>Community</NavLink>
          <NavLink>Ecosystem</NavLink>
        </NavLinks>
      </NavbarContainer>
    </div>
  );
}
