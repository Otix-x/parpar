import {
  scissorIcon,
  storeIcon,
  tagIcon,
  truckIcon,
} from '../../../assets/images';
import WorkCard from './WorkCard';

const Work = () => {
  return (
    <section className='pt-10'>
      <h2 className='text-center font-bold text-6xl md:text-7xl'>
        <span className='text-primary'>parpar</span> & go
      </h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-20'>
        <WorkCard
          img={truckIcon}
          title='FREE'
          desc='shipping everyday on order +3M'
        />
        <WorkCard
          img={tagIcon}
          title='25%'
          desc='off your first repeat delivery order'
        />
        <WorkCard
          img={storeIcon}
          title='10%'
          desc='off your curbside order of +1M'
        />
        <WorkCard
          img={scissorIcon}
          title='FREE'
          desc='trimming for the first time'
        />
      </div>
    </section>
  );
};

export default Work;
