import React from 'react'

const AppointmentInput = ({label, id, type, placeholder}) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm lg:text-base font-semibold text-primary-text">{label}</label>
      <input type={type} id={id} placeholder={placeholder} className="outline-none border border-solid border-black/20 rounded-lg w-full h-10 px-[10px] text-sm text-primary-text placeholder:text-sm placeholder:text-primary-text/40"/>
    </div>
  )
}

export default AppointmentInput;