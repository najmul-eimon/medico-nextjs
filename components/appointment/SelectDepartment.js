import {departments} from "@/data/department";
import Image from "next/image";
import AppointmentTitle from './AppointmentTitle';
import StepButtons from './StepButtons';

function SelectDepartment({ search, handlePrev, handleNext }) {

  return (
    <div className="single-content relative h-full w-full flex flex-col justify-between">
      {/* title */}
      <AppointmentTitle title={"Select Department"} description={"Select one department"} search={search}/>
      
      {/* content */}
      <div className="flex items-start justify-center flex-wrap gap-x-4 gap-y-10 lg:gap-6 flex-grow">
        {
          departments.map(({id, departmentName, icon}) => (
            <div key={id} className="department-select">
              <label htmlFor={id} className="cursor-pointer">
                <input type="radio" name="departments" id={id} className="absolute opacity-0 h-0 w-0"/>
                
                <div className="relative w-[136px] lg:w-[180px] h-[136px] lg:h-[180px] rounded-lg overflow-hidden bg-white single-department border border-secondary/10 flex items-center justify-center transition-all duration-300 ease-linear hover:shadow hover:shadow-[rgba(0,0,0,0.1)]">
                  <Image src="/images/svg/active-check.svg" width={20} height={20} className="absolute top-4 right-4 z-10 hidden active-check-mark" alt="Active Check mark"/>
                  
                  <div>
                    <span className="p-3 lg:p-0 h-20 w-20 flex items-center justify-center mx-auto">
                      <Image src={icon} width={80} height={80} alt="Department"/>
                    </span>
                    <h4 className="pt-2 text-sm lg:text-base font-medium text-primary-text">{departmentName}</h4>
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

export default SelectDepartment;