import React, { useContext } from "react";
import Context from "../../context/Context";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "./ProjectsStyles";
import {
  Section,
  SectionTitle,
  SectionDivider,
} from "../../styles/GlobalComponents";

function Projects() {
  const { projects } = useContext(Context);

  return (
    <Section id="projects">
      <SectionTitle mb="3rem" mt="3rem" main>
        Projects
      </SectionTitle>
      <SectionDivider mb="3rem" />
      <GridContainer>
        {projects.map(({ title, description, tags, source, visit, id }) => (
          <BlogCard key={id}>
            <HeaderThree titulo>{title}</HeaderThree>
            <Hr color="white" ml="40%" mb="10%" />
            <CardInfo>{description}</CardInfo>
            <Hr color="white" ml="40%" mt="10%" mb="10%" />
            <TitleContent color="white">Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
            <UtilityList>
              <ExternalLinks href={visit}>Live</ExternalLinks>
              <ExternalLinks href={source}>Code</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
}

export default Projects;
