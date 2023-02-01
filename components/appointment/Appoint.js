import { useState } from "react";
import { appointments } from "@/data/appointment"; 
import { Fragment } from "react";
import SelectClinic from "./SelectClinic";
import SelectDepartment from "./SelectDepartment";
import SelectDoctor from "./SelectDoctor";
import SelectDateTime from "./SelectDateTime";
import Description from "./Description";
import PatientDetails from "./PatientDetails";
import Confirmation from "./Confirmation";
import ConfirmDone from "./ConfirmDone";
import Image from "next/image";

const Appoint = () => {
  const [completedSteps, setCompletedSteps] = useState(0);
  const numberOfSteps = 7;

  const prev = () => {
    let step= completedSteps;
    if(step>0){
      step=step-1;
      setCompletedSteps(step);
    }
  }
  const next = () => {
    let step= completedSteps;
    if(step<numberOfSteps){
      step=step+1;
      setCompletedSteps(step);
    }
  }

  const allSteps = [
    <SelectClinic key={1} handleNext={next} search={true} />,
    <SelectDepartment key={2} handlePrev={prev} handleNext={next} search={true} />,
    <SelectDoctor key={3} handlePrev={prev} handleNext={next} search={true} />,
    <SelectDateTime key={4} handlePrev={prev} handleNext={next} search={false} />,
    <Description key={5} handlePrev={prev} handleNext={next} search={false} />,
    <PatientDetails key={6} handlePrev={prev} handleNext={next} search={false} />,
    <Confirmation key={7} handlePrev={prev} handleNext={next} search={false} />,
    <ConfirmDone key={8}/>,
  ];
   
  return (
    <section className="appointment py-10 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/*  left part */}
          <div className="rounded-lg overflow-hidden bg-white shadow-[4px_4px_20px_rgba(0,0,0,0.08),-4px_-4px_20px_rgba(0,0,0,0.08)] p-4 hidden xl:block">
            <ul className="space-y-4 tab-list" id="progressbar">
              {
                appointments.map(({id, title, description}, index) => (
                  <li key={id} className={`${index < completedSteps ? 'checked active' : index > completedSteps ? 'step-incomplete' : 'active'} pl-9 relative min-h-[70px] after:content after:h-[calc(100%-32px)] after:w-[1px] after:rounded-md after:bg-primary-text/40 after:absolute after:left-[10px] after:bottom-0 last:after:hidden`}>
                    <span className="h-5 w-5 rounded-full bg-primary absolute top-1 left-0 flex items-center justify-center">
                      <Image src="/images/svg/checkmark.svg" width={12} height={10} alt="Checkmark" className="checkmark hidden"/>
                      <span className="check-dot h-[6px] w-[6px] rounded-full bg-white"></span>
                    </span>
                    <h5 className="text-base text-primary-text font-semibold pb-1">{title}</h5>
                    <p className="text-sm text-primary-text/60">{description}</p>
                  </li>
                ))
              }
            </ul>
            
          </div>

          {/* right-part */}
          <div className="xl:col-span-3 xl:border xl:border-solid lg:border-black/10 rounded-lg xl:p-4">
            {
              allSteps.map((item, i) => {
                return <Fragment key={i}>{i === completedSteps && item}</Fragment>
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Appoint;