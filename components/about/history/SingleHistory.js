
const SingleHistory = ({data}) => {
  const {year, subtitle, launch, fromColor, toColor} = data;

  return (
    <div>
      <div className="h-[173px] border-l-[3px] border-[#EB67A6] ml-14 pl-3 mb-5 hidden lg:block">
        <h4 className="pb-3 text-lg xl:text-2xl font-semibold text-secondary-text">{year}</h4>
        <p className="text-lg font-medium text-secondary-text">{subtitle}</p>
      </div>
      <div style={{backgroundImage: `linear-gradient(to bottom, ${fromColor}, ${toColor})`}} className={`h-[132px] w-[132px] lg:h-28 lg:w-28 rounded-2xl lg:rounded-full drop-shadow-[6.44211px_6.44211px_12.8842px_rgba(0,0,0,0.15)] flex items-center justify-center`}>
        <p className="text-xl font-semibold text-white hidden lg:block">{launch}</p>

        {/* mobile content */}
        <div className="text-center lg:hidden">
          <h5 className="pb-3 text-white text-xl font-semibold">{year}</h5>
          <p className="text-base font-medium text-white">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleHistory;