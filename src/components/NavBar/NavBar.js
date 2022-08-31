import Link from "next/link";

import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCodepen } from "react-icons/di";

import { Container, Div, NavLink, SocialIcons, Span } from "./NavBarStyles";

const NavBar = () => (
  <Container>
    <Div justifyContent="space-between">
      <Link href="/">
        <NavLink style={({ isActive }) => (isActive ? "active" : "")}>
          <DiCodepen size="3rem" style={{ marginTop: "10px" }}></DiCodepen>
          <Span>Nahuel Dev</Span>
        </NavLink>
      </Link>
    </Div>
    <Div columns={4} columnGap={"5vw"}>
      <li>
        <Link href="#about">
          <NavLink style={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink style={({ isActive }) => (isActive ? "active" : "")}>
            Projects
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink style={({ isActive }) => (isActive ? "active" : "")}>
            Technologies
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink
            to="/contact"
            backgroundColor={({ isActive }) => (isActive ? "darkorange" : "")}
          >
            Contact
          </NavLink>
        </Link>
      </li>
    </Div>
    <Div columns={2} sizeColumns={"auto"} justifyContent={"space-evenly"}>
      <li>
        <SocialIcons href="https://github.com/nahuegallinoti">
          <AiFillGithub size="3rem" />
        </SocialIcons>
      </li>
      <li>
        <SocialIcons href="https://www.linkedin.com/in/nahuel-gallinoti-1b482213a/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </li>
    </Div>
  </Container>
);

export default NavBar;
