import About from '@/components/About';
import Introduction from '@/components/Introduction';
import { ProjectList } from '@/components/project-list';

const HomePage = () => {
  return (
    <main className="text-darkgrey flex flex-col gap-y-48 pt-24 pb-12">
      <Introduction id="home" />
      <About id="about" />
      <ProjectList id="projects" />
    </main>
  );
};

export default HomePage;
