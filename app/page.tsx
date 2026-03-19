import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import DeepTech from './components/DeepTech';
import DevOpsGrid from './components/DevOpsGrid';
import SkillMatrix from './components/SkillMatrix';
import Languages from './components/Languages';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bento-grid">
      <Hero />
      <Projects />
      <Experience />
      <SkillMatrix />
      <DeepTech />
      <DevOpsGrid />
      <Languages />
      <Footer />
    </main>
  );
}
