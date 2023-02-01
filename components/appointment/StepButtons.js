import React from 'react'

const StepButtons = ({handlePrev, handleNext, back, next}) => {
  return (
    <div className="flex items-center justify-center lg:justify-end gap-4 w-full flex-shrink-0 mt-10 lg:mt-6">
      {
        handlePrev && <button onClick={handlePrev} type="button" className="prev-button w-[130px] text-center leading-9 text-sm font-semibold text-white rounded-md bg-[#DB3E4D]">{back}</button>
      }
      <button onClick={handleNext} type="button" className="next-button w-[130px] text-center leading-9 text-sm font-semibold text-white rounded-md bg-[#084C94]">{next}</button>
    </div>
  )
}

export default StepButtons;