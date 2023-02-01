import AppointmentTitle from "./AppointmentTitle";
import StepButtons from "./StepButtons";
import location from "../../assets/images/location/clinic2.jpg";
import { confirmationData } from "../../data/appointment";

function Confirmation({ search, handlePrev, handleNext }) {
  return (
    <div className="single-content card2 relative h-full w-full flex flex-col justify-between">
      {/* title */}
      <AppointmentTitle title={"Confirmation"} description={"Preview your reservation and confirm"} search={search}/>

      {/* content */}
      <div className="flex flex-col sm:flex-row items-start justify-center gap-6 flex-grow">
        {/* card 1 */}
        <div className="w-full sm:w-[216px] rounded-[10px] overflow-hidden bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)]">
          <div className="rounded-br-[10px] overflow-hidden h-[76px] w-full">
            <img src={location} className="w-full h-full object-cover" alt="Location"/>
          </div>
          <div className="mt-[10px] p-[10px] text-center">
            <h5 className="text-sm lg:text-base font-semibold text-primary-text">Houston</h5>
            <p className="pt-[10px] text-xs lg:text-sm text-primary-text/60">4600 ALDINE BENDER RD NORTH HOUSTON</p>
          </div>
        </div>

        {
          confirmationData.map(({ id, header, items }) => (
            <div key={id} className="w-full sm:w-[240px]">
              <h4 className="pb-2 text-base lg:text-xl font-semibold text-secondary/80">{header}</h4>
              <div className="bg-white rounded-lg p-[10px]">
                <ul className="space-y-[10px]">
                  {
                    items.map(({ id, title, description }) => (
                      <li key={id} className="flex items-center gap-[10px]">
                        <span className="w-[50px] flex-shrink-0 text-sm lg:text-base font-medium text-primary-text">{title}</span>
                        <p className="text-sm lg:text-base text-primary-text/60">{description}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          ))
        }
      </div>

      {/* buttons */}
      <StepButtons handleNext={handleNext} handlePrev={handlePrev} back={"Back"} next={"Confirm"}/>
    </div>
  );
}

export default Confirmation;
