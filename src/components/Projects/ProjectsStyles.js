import styled from "styled-components";

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  column-gap: 1rem;
  row-gap: 5rem;
  align-items: stretch;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
 
  margin-bottom: 5rem;
  padding-bottom: 5rem;

`;

export const BlogCard = styled.div`
  margin: 0 auto;
  margin-bottom: 2rem;
  display: grid;
  border-radius: 10px;
  box-shadow: inset 2px 2px 17px 0px rgb(156 141 141 / 50%);
  text-align: center;
  width: 400px;
  cursor: pointer;
  grid-template-rows: 0.3fr 0.2fr 0.3fr 0.2fr;
  background-color: rgba(60, 58, 68, 0.2);

  &:hover {
    background-color: #0F192E;
    animation: bounce 1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    @keyframes bounce {
      0% {
        transform: scale(1);
      }
      50% {
        background-color: #0d132d;
        transform: scale(1.1);
      }


  }
}
`;
export const TitleContent = styled.h2`
  color: ${(props) => (props.color ? props.color : "#9cc9e3;")};
  margin: 10px 10px 10px 10px;
  font-style: italic;
`;

export const HeaderThree = styled.h3`
  display: grid;
  align-content: center;
  justify-content: center;
  font-weight: 30px;
  letter-spacing: 2px;
  color: ${(props) => (props.color ? props.color : "#9cc9e3;")};
  font-size: ${(props) => (props.titulo ? "3rem" : "2rem")};
  height: 25%;
  width: 100%;
`;

export const Hr = styled.hr`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 3px;
  border: 0;
  background: #d0bb57;
  margin: auto;
  margin-bottom: 10%;
  background: ${(props) => (props.color ? props.color : "")};
`;

export const CardInfo = styled.p`
  display: grid;
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 10;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;


  &:hover {
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
`;

export const Tag = styled.li`
  padding: 1rem 1rem;
  color: #d8bfbf;
  transition: transform 0.1s;

  &:hover {
    background: #6b3030;
    opacity: 0.8;
    color: white;
    font-weight: bold;
    border-radius: 0.5rem;
  }
`;
