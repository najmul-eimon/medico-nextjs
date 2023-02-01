import { useState } from 'react';
import DatePicker from 'react-datepicker';
import AppointmentTitle from './AppointmentTitle';
import StepButtons from './StepButtons';

function SelectDateTime({ search, handlePrev, handleNext }) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="single-content card2 relative h-full w-full flex flex-col justify-between">
      {/* title */}
      <AppointmentTitle title={"Select Date & Time"} description={"Select available date and time"} search={search}/>

      {/* content */}
      <div className="flex justify-center flex-grow">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
        showTimeSelect
        timeFormat="p"
        timeIntervals={30}
        dateFormat="Pp"
      />
      </div>

      {/* buttons */}
      <StepButtons handleNext={handleNext} handlePrev={handlePrev} back={"Back"} next={"Next"}/>
    </div>
  )
}

export default SelectDateTime