import Container from '../../components/Container';
import MainLayout from '../../layouts/MainLayout';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Testimonials from './components/Testimonials';
import Why from './components/Why';
import Work from './components/Work';

const Home = () => {
  return (
    <MainLayout>
      <Container>
        <Hero />
      </Container>
      <Container>
        <Work />
        <div className='mt-20'></div>
        <Testimonials />
        <Why />
      </Container>
    </MainLayout>
  );
};

export default Home;
