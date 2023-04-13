import About from '@/components/About';
import Introduction from '@/components/Introduction';

const HomePage = () => {
  return (
    <main className="">
      <Introduction className="mt-36 mb-32" />
      <About className="mt-20" />

      <div className="h-[1000px]"></div>
    </main>
  );
};

export default HomePage;
