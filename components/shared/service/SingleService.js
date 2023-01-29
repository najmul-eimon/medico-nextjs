import Image from "next/image";

const SingleService = ({service}) => {
  const {icon, serviceName, description} = service;
  
  return (
    <div className="flex flex-col md:flex-row items-center md:gap-6 rounded-[10px] pb-3 md:pb-0 overflow-hidden relative group">
      <div className="hidden md:block w-[86px] h-full rounded-r-[5px] absolute top-0 left-0 bg-[#EDEDF3]/40 z-0 transition-all duration-300 ease-linear group-hover:w-full group-hover:bg-[#E5F2FF]"></div>
      <div className="flex items-center justify-center w-[60px] md:w-[86px] h-[60px] md:h-full rounded-[5px] md:rounded-none bg-[#EDEDF3]/40 md:bg-transparent flex-shrink-0 relative z-10">
        <Image src={icon} width={40} height={40} alt="Service Icon" />
      </div>
      <div className="relative z-10 px-1 py-2 md:pt-4 md:pb-3 text-center md:text-left">
        <h3 className="text-base md:text-xl xl:text-2xl font-medium text-primary-text">{serviceName}</h3>
        <p className="text-sm text-primary-text/40 pt-1 md:pt-[1px]">{description}</p>
      </div>
    </div>
  )
}

export default SingleService;