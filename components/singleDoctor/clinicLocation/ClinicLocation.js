import Title from "../../shared/Title";
import {locations} from '@/data/locations';
import SingleLocation from "./SingleLocation";

const ClinicLocation = () => {
  return (
    <section className="clinic-location py-10 lg:py-16">
      <div className="container">
        {/* title */}
        <Title title={"Our Clinic Locations"}/>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
            locations.map((location) => <SingleLocation key={location.id} data={location}/>)
          }
        </div>
      </div>
    </section>
  )
}

export default ClinicLocation;