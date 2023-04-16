import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import Introduction from '@/components/home/Introduction';
import { ProjectList } from '@/components/home/project-list';

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
