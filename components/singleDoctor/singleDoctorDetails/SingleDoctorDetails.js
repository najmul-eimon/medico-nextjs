import Image from 'next/image';
import {HiOutlinePhone} from 'react-icons/hi2';
import DetailsList from './DetailsList';

const SingleDoctorDetails = ({data}) => {
  const {image, doctorName, specialist, phone, educations, description, services, languages} = data;

  return (
    <section className="single-doctor py-10 lg:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 gap-6">
          {/* image */}
          <div className="rounded-[10px] overflow-hidden bg-[#FAFBFD] sm:flex sm:items-center h-fit md:block md:col-span-2 lg:col-span-1">
            <div className="rounded-[10px] overflow-hidden">
              <Image src={image} className="w-full" width={306} height={360} alt="Doctor" />
            </div>
            <div className="p-4">
              <h3 className="text-xl 2xl:text-2xl font-semibold text-secondary">{doctorName}</h3>
              <p className="text-sm lg:text-base text-primary-text/60 py-2">{specialist}</p>
              <p className="text-sm lg:text-base font-medium text-secondary flex items-center gap-[6px]"><HiOutlinePhone className="text-lg flex-shrink-0"/>{phone}</p>
            </div>
          </div>

          {/* description */}
          <div className="md:col-span-3">
            <p className="pb-6 text-sm xl:text-base text-primary-text/60 text-center sm:text-left">{description?.slice(0,1)[0]}</p>
            <p className="text-sm xl:text-base text-primary-text/60 text-center sm:text-left">{doctorName} {description?.slice(1)[0]}</p>
            
            <ul className="mt-6 divide-y-[1px] divide-black/5">
              <DetailsList listName={"Services"} listData={services}/>
              <DetailsList listName={"Education"} listData={educations}/>
              <DetailsList listName={"Languages"} listData={languages}/>
            </ul>

          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleDoctorDetails;