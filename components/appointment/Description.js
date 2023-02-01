import AppointmentTitle from './AppointmentTitle';
import {AiOutlineCloudUpload} from 'react-icons/ai';
import StepButtons from './StepButtons';
import { useState } from 'react';

function Description({search, handlePrev, handleNext}) {
  const [selectedFileName, setSelectedFileName] = useState('No file choosen.');

  const handleselectedFile = event => {
    setSelectedFileName(event.target.files[0].name);
  };

  return (
    <div className="single-content card2 relative h-full w-full flex flex-col justify-between">
      {/* title */}
      <AppointmentTitle title={"Descriptions"} description={"In any thing you want to brief before the meet and any thing you want to share any report"} search={search}/>

      {/* content */}
      <div className="flex-grow">
        <div className="pb-6">
          <h5 className="text-sm lg:text-base font-semibold text-primary-text pb-4">Appointment Descriptions</h5>
          <textarea className="p-[10px] w-full h-[120px] rounded-lg border border-black/20 resize-none text-base text-primary-text placeholder:text-primary-text/40 placeholder:text-base outline-none" placeholder="Descriptions"></textarea>
        </div>

        <div>
          <h5 className="text-sm lg:text-base font-semibold text-primary-text pb-4">Add Medical Report</h5>
          <label htmlFor="file" className="file-label w-full h-[120px] flex items-center justify-center rounded-lg cursor-pointer">
            <span className="flex items-center justify-center gap-[10px] text-sm text-primary-text/40">
              <AiOutlineCloudUpload className="ph-cloud-arrow-up text-2xl text-primary-text/40"/>
              Upload
            </span>
          </label>
          <p className="choosen pt-3 text-sm text-primary-text/60">{selectedFileName}</p>
          <input onChange={handleselectedFile} type="file" id="file" className="absolute opacity-0 h-0 w-0" accept="image/png, image/jpeg, application/pdf"/>
        </div>
      </div>

      {/* buttons */}
      <StepButtons handleNext={handleNext} handlePrev={handlePrev} back={"Back"} next={"Next"}/>
    </div>
  )
}

export default Description;