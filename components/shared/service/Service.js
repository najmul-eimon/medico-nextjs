import {services} from '@/data/services';
import Title from '../Title';
import SingleService from './SingleService';

const Service = () => {
  return (
    <section className="service py-10 lg:py-16">
      <div className="container">
        {/* title */}
        <Title title={"Services"}/>

        {/* services */}
        <div className="service-grid grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-10">
          {
            services.map((service) => <SingleService key={service.id} service={service} />)
          }
        </div>
      </div>
    </section>
  )
}

export default Service