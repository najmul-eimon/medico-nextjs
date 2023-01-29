
const Title = ({title}) => {
  return (
    <div className="border-b-2 border-black/5 mb-6 md:mb-10">
      <h2 className="pb-4 text-2xl lg:text-[32px] font-semibold text-secondary relative after:content after:w-[86px] after:bg-primary after:rounded after:h-[2px] after:absolute after:bottom-[-2px] after:left-0">{title}</h2>
    </div>
  )
}

export default Title;