import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const CarouselItem = styled.div`
  display: flex;  
  border: 2px solid #ffffff;
  border-radius: 20px;
  min-width: 300px;
  transition: transform 0.2s;
  padding: 2rem;
  margin: 2rem;
  align-items: center;
  justify-content: center;
  
    ${(props) =>
      props.active === props.index ? `opacity: 1` : `opacity: 0.5`};

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
      opacity: 0.8;
      border-color: #13ADC7;
    }

    :hover:nth-last-child(1) {
      transform: scale(1.1);
      cursor: pointer;
      opacity: 1;
      border-color: green;

    }
  }
`;

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  margin-right: 1.5rem;

  background: linear-gradient(
    121.57deg,
    #ffffff 10%,
    rgba(255, 255, 255, 0.66) 30.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CarouselItemText = styled.p``;
