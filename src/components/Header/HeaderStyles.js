import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  margin-top: 1.5rem;
`;

export const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: center;
`;

export const IconDev = styled.a`
  display: grid;
  grid-template-columns: 4rem auto;
  align-items: center;
  cursor: pointer;
`;

export const SocialDiv = styled.div`
display: grid;
grid-template-columns: 80px 80px;
justify-content: "center")};
align-items: center;
`;

export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: white;
  transition: 0.5s ease;
  justify-items: start;
  &:hover {
    color: #8cb3d9;
    cursor: pointer;
  }
`;

export const Span = styled.span`
  font-size: 2rem;
  width: 100%;
`;

export const SocialIcons = styled.a`
  transition: 0.5s ease;
  color: white;
`;
