import React from "react";
import { DiAngularSimple, DiFirebase, DiCodeBadge } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionTitle mb="3rem" mt="3rem" main>
      Technologies
    </SectionTitle>
    <SectionDivider mb="5rem" />
    <SectionText maxWidth="auto">
      I've worked with a range of technologies and frameworks, including:
    </SectionText>
    <List>
      <ListItem>
        <DiAngularSimple size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML, CSS, JavaScript.
            <br />
            Experience with Angular 10+
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCodeBadge size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            I work with .NET technologies (C#) and a little bit of Node.js.
            <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            I work with relational databases and I have knowledge about non
            relational databases like Firebase or MongoDB.
            <br />
            Experience with SQL Server and MySQL.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
