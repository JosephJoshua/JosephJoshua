import About from '@/components/About';
import Introduction from '@/components/Introduction';
import { ProjectList } from '@/components/project-list';

const HomePage = () => {
  return (
    <main className="text-darkgrey">
      <Introduction className="mt-36 mb-32" />
      <About className="mt-20" />
      <ProjectList className="my-32" />
    </main>
  );
};

export default HomePage;
