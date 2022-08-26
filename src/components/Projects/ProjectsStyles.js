import styled from "styled-components";

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  column-gap: 1rem;
  row-gap: 5rem;
  align-items: stretch;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
  justify-content: center;
  align-content: center;
`;

export const BlogCard = styled.div`
  margin: 0 auto;
  margin-bottom: 2rem;
  display: grid;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  cursor: pointer;
  grid-template-rows: 0.3fr 0.2fr 0.3fr 0.2fr;
  background-color: rgba(60, 58, 68, 0.2);

  &:hover {
    animation: rotation 1s ease 0s normal forwards;

    @keyframes rotation {
      0% {
        transform: rotateY(35deg) rotateX(20deg);
      }
      40% {
        transform: rotateZ(15deg);
        background-color: #164362;
      }
      100% {
        transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
        background-color: #0d132d;
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
  font-weight: 30px;
  letter-spacing: 2px;
  color: ${(props) => (props.color ? props.color : "#9cc9e3;")};
  font-size: ${(props) => (props.titulo ? "3rem" : "2rem")};
  height: 100px;
  width: 100%;
`;

export const Hr = styled.hr`
  width: 100px;
  height: 3px;
  border: 0;
  background: #d0bb57;
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
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
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  max-width: 200px;
  max-height: 40px;

  &:hover {
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 0.3fr));
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 3rem;
`;

export const Tag = styled.li`
  color: #d8bfbf;
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.1);
    background: #9cc9e3;
    opacity: 0.8;
    color: white;
    font-weight: bold;
    border-radius: 10px;
  }
`;
