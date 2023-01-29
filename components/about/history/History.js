import {histories} from '@/data/history';
import SingleHistory from './SingleHistory';

const History = () => {
  return (
    <section className="our-history py-12 lg:pt-10">
      <div className="container">
        <div className="map-bg lg:pt-12 lg:pb-[155px] bg-cover xl:bg-contain bg-no-repeat bg-center">
          {/* title */}
          <div className="mb-6 lg:mb-10 xl:mb-[70px]">
            <h2 className="text-2xl lg:text-4xl xl:text-[40px] 2xl:text-5xl font-bold text-secondary-text text-center">Our History</h2>
          </div>

          {/* content */}
          <div className="flex flex-wrap items-center justify-center gap-6 xl:gap-10">
            {
              histories.map((history) => <SingleHistory key={history.id} data={history}/>)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default History