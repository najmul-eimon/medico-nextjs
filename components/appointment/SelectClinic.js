import {locations} from "@/data/locations";
import Image from "next/image";
import AppointmentTitle from "./AppointmentTitle";
import StepButtons from "./StepButtons";

function SelectClinic({ search, handleNext }) {

  return (
    <div className="single-content relative h-full w-full flex flex-col justify-between">
      {/* title */}
      <AppointmentTitle title={"Select Clinic"} description={"Select your nearest clinic"} search={search}/>

      {/* content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-6 flex-grow">
        {
          locations.map(({id, image, clinic, address}) => (
            <div key={id} className="clinic-select">
              <label htmlFor={id} className="cursor-pointer">
                <input type="radio" name="clinics" id={id} className="absolute opacity-0 h-0 w-0"/>
                
                <div className="relative rounded-[10px] overflow-hidden bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] clinic-location transition-all duration-300 ease-linear hover:shadow hover:shadow-[rgba(0,0,0,0.1)]">
                  <Image src="/images/svg/active-check.svg" width={20} height={20} className="absolute top-4 right-4 z-10 hidden active-check-mark" alt="Active Check mark"/>
                  
                  <div className="rounded-[10px] rounded-bl-none overflow-hidden h-[180px]">
                    <Image src={image} width={215} height={180} className="w-full h-full object-cover" alt="Location"/>
                  </div>
                  <div className="mt-[10px] p-[10px] text-center">
                    <h4 className="text-sm lg:text-base font-semibold text-primary-text">{clinic}</h4>
                    <p className="pt-[10px] text-xs lg:text-sm text-primary-text/60">{address}</p>
                  </div>
                </div>
              </label>
            </div>
          ))
        }
      </div>

      {/* buttons */}
      <StepButtons handleNext={handleNext} back={"Back"} next={"Next"}/>
    </div>
  );
}

export default SelectClinic;
