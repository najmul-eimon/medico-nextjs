
const AppointmentTitle = ({search, title, description}) => {
  return (
    <div className={`${search ? 'justify-between' : 'justify-center lg:justify-between'} flex flex-col md:flex-row items-center gap-4 flex-shrink-0 pb-4 lg:border-b lg:border-black/10 mb-6`}>
      <div className={`${search ? 'text-center md:text-left' : 'text-center lg:text-left'}`}>
        <h5 className="text-sm lg:text-base font-semibold text-primary-text pb-1">{title}</h5>
        <p className="text-xs text-primary-text/60">{description}</p>
      </div>
      {
        search && <input type="text" placeholder="search by name" className="h-10 w-full outline-none md:w-[400px] px-[10px] rounded-[5px] border border-solid border-black/10 bg-white text-sm text-primary-text placeholder:text-sm placeholder:text-primary-text/40"/>
      }
    </div>
  )
}

export default AppointmentTitle;