import '../style/hero.scss'
import { Link } from 'react-router-dom';

import WomanImg from '../img/woman_hero.png'

const Hero = (id) => {
  return <section className='h-[800px] bg-no-repeat bg-cover bg-center py-24 hero'>
    <div className='container mx-auto flex justify-around h-full'>
      <div className='flex flex-row justify-between items-start'>
        <div className='flex flex-col justify-center items-start h-full'>
          <h3 className='text-6xl'>Upgrade your Style</h3>
          <h2 className='text-5xl mt-6'>Shop With Us</h2>
          <Link to='/'> 
          <h2 className='text-4xl cursor-pointer mt-6 underline'>Watch Now</h2>
          </Link>
        </div>
        <div className='hero-img'>
          <img src={WomanImg} alt="" />
        </div>
      </div>
    </div>
  </section>;
};

export default Hero;
