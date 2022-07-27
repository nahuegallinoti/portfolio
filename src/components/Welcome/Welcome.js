import React from "react";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { LeftSection } from "./WelcomeStyles";

const Welcome = ({ greet }) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main>{greet}</SectionTitle>
    </LeftSection>
  </Section>
);

export default Welcome;
