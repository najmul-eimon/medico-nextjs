import Title from '../shared/Title';
import {doctors} from '@/data/doctors';
import SingleDoctor from '../shared/SingleDoctor';

const CertifiedDoctors = () => {
  return (
    <section className="doctors py-10 lg:py-16">
      <div className="container">
        {/* title */}
        <Title title={"Our Certified Doctores"}/>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            doctors.slice(0,3).map((doctor) => <SingleDoctor key={doctor.id} data={doctor}/>)
          }
        </div>
      </div>
    </section>
  )
}

export default CertifiedDoctors;