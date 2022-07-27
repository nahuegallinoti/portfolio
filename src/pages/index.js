import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Welcome from "../components/Welcome/Welcome";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import Provider from "../context/Provider";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Welcome greet={`Welcome to my portfolio`} />
        <BgAnimation />
      </Section>
      <Provider>
        <AboutMe />
        <Projects />
      </Provider>
      <Technologies />
      <Contact />
    </Layout>
  );
};

export default Home;
