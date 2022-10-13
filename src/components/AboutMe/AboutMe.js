import React, { useContext } from "react";
import Context from "../../context/Context";

import {
  CarouselContainer,
  CarouselItem,
  CarouselItemText,
  CarouselItemTitle,
} from "./AboutMeStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

function Timeline() {
  const { timeLine } = useContext(Context);

  return (
    <Section id="about">
      <SectionTitle mb="3rem" mt="3rem" main>
        About Me
      </SectionTitle>
      <SectionDivider mb="5rem" />
      <SectionText maxWidth="auto">
        I'm a fullstack web developer, specialiced in backend development and with a
        further passion for blockchain technologies. Also I've experience as QA
        Functional and QA Leader.
      </SectionText>

      <CarouselContainer>
        {timeLine.map((item, index) => (
          <CarouselItem key={index} id={`carousel__item-${index}`}>
            <CarouselItemTitle>{item.year}</CarouselItemTitle>
            <CarouselItemText>{item.text}</CarouselItemText>
          </CarouselItem>
        ))}
      </CarouselContainer>
    </Section>
  );
}

export default Timeline;
