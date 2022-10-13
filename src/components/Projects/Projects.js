import React, { useContext } from "react";
import Context from "../../context/Context";

import { GridContainer } from "./ProjectsStyles";
import { Section, SectionTitle, SectionDivider } from "../../styles/GlobalComponents";

import { Project } from "./Project";

function Projects() {
  const { projects } = useContext(Context);

  return (
    <Section id="projects">
      <SectionTitle mb="3rem" mt="3rem" main>
        Projects
      </SectionTitle>
      <SectionDivider mb="5rem" />
      <GridContainer>
        {projects && projects.map(({ title, description, tags, source, visit, id, icon }) => (
          <Project key={id} title={title} description={description} tags={tags} source={source} visit={visit} icon={icon} />
        ))}
      </GridContainer>
    </Section>
  );
}

export default Projects;