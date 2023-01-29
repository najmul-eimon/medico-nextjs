import { Link } from 'react-router-dom';
import icu from '../../../assets/images/icu.jpg';
import {counterData} from '../../../data/counter';
import {features} from '../../../data/counter';
import SingleCounter from './SingleCounter';
import {FiCheck} from 'react-icons/fi';

const WhyUs = () => {
  return (
    <section className="why-we py-6 md:py-10 lg:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 items-center gap-6">
          {/* text content */}
          <div className="lg:col-span-5 pb-[98px] sm:pb-16 md:pb-0 md:row-span-2 lg:row-auto">
            <h2 className="text-2xl lg:text-[32px] lg:leading-[48px] font-semibold text-primary-text text-center md:text-left">Joining Hands With Techno Easement</h2>
            <p className="text-sm md:text-base text-primary-text/40 text-center md:text-left">It is a long established fact that a reader will be distracted by at its layout. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            
            <ul className="my-6 space-y-[14px]">
              {
                features.map(({id, description}) => (
                  <li key={id} className="flex items-center gap-[14px]">
                    <FiCheck className="text-2xl text-primary"/>
                    <p className="text-sm md:text-base font-medium text-primary-text">{description}</p>
                  </li>
                ))
              }
            </ul>

            <div className="text-center md:text-left">
              <Link to="/appointment" className="inline-block py-2 md:py-3 px-9 md:px-12 text-white text-sm font-semibold rounded-md bg-primary shadow-[0px_10px_10px_rgba(55,214,201,0.24)] hover:bg-primary-alt hover:shadow-none">Appointment</Link>
            </div>
          </div>

          {/* image */}
          <div className="lg:col-span-5 h-[196px] sm:h-[300px] md:h-auto">
            <img src={icu} alt="ICU" className="h-full w-full object-cover" />
          </div>

          {/* counter */}
          <div className="lg:col-span-2 md:row-start-2 md:col-start-2 lg:row-start-auto lg:col-start-auto">
            <ul id="counter" className="flex flex-row lg:flex-col flex-wrap gap-y-4 lg:gap-20 justify-center">
              {
                counterData.map((data) => <SingleCounter key={data.id} counterData={data}/>)
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs