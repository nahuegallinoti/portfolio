import Link from "next/link";

import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCodepen } from "react-icons/di";

import {
  Container,
  Div,
  IconDev,
  NavLink,
  SocialIcons,
  Span,
  SocialDiv,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div>
      <Link href="/">
        <IconDev>
          <DiCodepen size="3rem"></DiCodepen>
          <Span>Nahuel Dev</Span>
        </IconDev>
      </Link>
    </Div>
    <Div>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div>
    <SocialDiv>
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
    </SocialDiv>
  </Container>
);

export default Header;
