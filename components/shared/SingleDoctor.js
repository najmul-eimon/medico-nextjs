import { useState} from 'react';
import {HiOutlinePhone} from 'react-icons/hi2';
import Link from 'next/link';
import Image from 'next/image';

const SingleDoctor = ({data}) => {
  const {id, image, doctorName, specialist, phone, educations, details} = data;

  const [showAll, setShowAll] = useState(false);
  const [filterEducation, setFilterEducation] = useState(educations.slice(0,4));

  const handleShowEducations = () => {
    setShowAll(true);
    setFilterEducation(educations);
  }

  return (
    <div className="rounded-[15px] bg-[#FDFEFF] px-2 lg:px-3 xl:px-6 py-3 text-center shadow-[0px_8px_24px_rgba(4,90,181,0.08)] h-fit hover:shadow hover:shadow-[rgba(4,90,181,0.08)] transition-all duration-300">
      {/* image */}
      <div className="h-[100px] w-[100px] rounded-full overflow-hidden mx-auto mb-2">
        <Image src={image} className="w-full h-full object-cover" width={100} height={100}  alt="Doctor"/>
      </div>
      <h4 className="text-xl xl:text-2xl xl:leading-9 font-semibold text-secondary whitespace-nowrap">{doctorName}</h4>
      <p className="text-sm lg:text-base text-primary-text/60 py-2">{specialist}</p>
      <p className="text-sm font-medium text-primary-text/60 flex items-center gap-[6px] justify-center"><HiOutlinePhone className="text-lg flex-shrink-0"/>{phone}</p>

      <ul className="flex flex-wrap items-center justify-center gap-2 my-6">
        {
          filterEducation.map((education, index) => (
            <li key={index}>
              <span className="inline-block text-center w-[41px] lg:w-11 xl:w-[60px] 2xl:w-[67px] py-[5px] text-xs text-secondary rounded-3xl border border-secondary">{education}</span>
            </li>
          ))
        }
        {
          !showAll && 
          <li><button type="button" onClick={handleShowEducations} className="qualification-more text-center w-[41px] lg:w-11 xl:w-[60px] 2xl:w-[67px] py-[5px] text-xs text-white rounded-3xl border border-secondary bg-secondary">{educations.length - 4}+</button></li>
        }
      </ul>

      <p className="text-sm text-primary-text/60 pb-6">{details}</p>
      <Link href={`/doctors/${id}`} className="inline-block py-3 px-12 text-white text-sm font-semibold rounded-md bg-primary shadow-[0px_10px_10px_rgba(55,214,201,0.24)] hover:bg-primary-alt hover:shadow-none">View Profile</Link>
    </div>
  )
}

export default SingleDoctor;