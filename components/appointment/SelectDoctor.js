import {doctors} from "../../data/doctors";
import AppointmentTitle from "./AppointmentTitle";
import StepButtons from "./StepButtons";
import activeCheck from '../../assets/images/svg/active-check.svg';

function SelectDoctor({ search, handlePrev, handleNext }) {

  return (
    <div className="single-content card2 relative h-full w-full flex flex-col justify-between">
      {/* title */}
      <AppointmentTitle title={"Select Doctor"} description={"Select one doctor"} search={search}/>

      {/* content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-6 flex-grow">
        {
          doctors.slice(0, 4).map(({id, doctorName, specialist, image}) => (
            <div key={id} className="doctor-select">
              <label htmlFor={`doctor${id}`} className="cursor-pointer">
                <input type="radio" name="doctors" id={`doctor${id}`} className="absolute opacity-0 h-0 w-0"/>
                
                <div className="relative single-doctor rounded-[10px] overflow-hidden shadow-[0px_0px_20px_rgba(0,0,0,0.1)] transition-all duration-300 ease-linear hover:shadow hover:shadow-[rgba(0,0,0,0.1)]">
                  <img src={activeCheck} className="absolute top-4 right-4 z-10 hidden active-check-mark" alt="Active Check mark"/>
                  
                  {/* image */}
                  <div className="rounded-[10px] overflow-hidden h-[140px] lg:h-[222px]">
                    <img src={image} className="w-full h-full object-cover" alt="Doctor"/>
                  </div>

                  {/* name */}
                  <div className="p-[10px]">
                    <h5 className="pb-1 text-sm lg:text-base font-semibold text-primary-text">{doctorName}</h5>
                    <p className="text-xs lg:text-sm text-primary-text/40">{specialist} specialist</p>
                  </div>
                </div>
              </label>
            </div>
          ))
        }
      </div>

      {/* buttons */}
      <StepButtons handleNext={handleNext} handlePrev={handlePrev} back={"Back"} next={"Next"}/>
    </div>
  )
}

export default SelectDoctor