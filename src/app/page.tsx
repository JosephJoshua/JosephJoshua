import About from '@/components/About';
import Contact from '@/components/Contact';
import Introduction from '@/components/Introduction';
import { ProjectList } from '@/components/project-list';

const HomePage = () => {
  return (
    <main className="text-darkgrey flex flex-col gap-y-48 py-24">
      <Introduction id="home" />
      <About id="about" />
      <ProjectList id="projects" />
      <Contact id="contact" />
    </main>
  );
};

export default HomePage;
