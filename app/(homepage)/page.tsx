import { About } from "./_components/about";
import { Achievement } from "./_components/achievement";
import { Extracurricular } from "./_components/services";
import { Hero } from "./_components/hero";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Extracurricular />
      <Achievement/>
      <div>Homepage</div>
    </main>
  );
};

export default Homepage;
