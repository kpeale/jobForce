import Hero from './Hero/Hero';
import Category from './Category/Category';
import Features from './Features/Features';
import TopCompany from './TopCompany/TopCompany';

const Home = () => {
  return (
    <div className='overflow-hidden '>
      <Hero />
      <Category />
      <Features />
      <TopCompany />
    </div>
  );
};

export default Home;
