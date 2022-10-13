import styled from "styled-components";

export const Container = styled.nav`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  background: ${(props) => props.theme.colors.navBarBackground1};
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

export const Div = styled.div`
  display: grid;

  align-items: center;

  justify-items: ${(props) =>
    props.justifyItems ? props.justifyItems : "center"};

  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};

  grid-template-columns: repeat(
    ${(props) => (props.columns ? props.columns : "auto-fit")},
    ${(props) => (props.sizeColumns ? props.sizeColumns : "200px")}
  );

  grid-column-gap: ${(props) => (props.columnGap ? props.columnGap : "0px")};
`;

export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: white;
  transition: 0.5s ease;
  justify-items: start;
  &:hover {
    color: black;
    cursor: pointer;
    background-color: white;
  }
  &:active {
    background-color: orange !important;
    color: white;
  }
`;

export const Span = styled.span`
  font-size: 2rem;
`;

export const SocialIcons = styled.a`
  transition: 0.5s ease;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
