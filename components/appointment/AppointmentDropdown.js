import {BsChevronDown} from 'react-icons/bs';

const AppointmentDropdown = ({showDropdown, setShowDropdown, selectData, data, setSelectData}) => {
  return (
    <div className="custom-select">
      <button type="button" className="w-full relative duration-150"
        onBlur={() => setShowDropdown(false)}
        onClick={() => setShowDropdown(!showDropdown)}>

        <div className={`flex items-center justify-between border border-black/20 rounded-[10px] h-10 px-[10px] text-sm font-normal text-primary-text/40 ${showDropdown ? 'rounded-b-none border-b-0' : ''}`}>
          {selectData}
          <span className={showDropdown ? 'rotate-180' : ''}>
            <BsChevronDown className="text-xl text-black" />
          </span>
        </div>

        {showDropdown && (
          <div className="select-dropdown absolute w-full top-full rounded-b-[10px] z-20 bg-white text-left border border-black/20 border-t-0 max-h-[200px] overflow-y-auto">
            {data.map((value, index) => (
              <p className={`${selectData === value && "bg-secondary/10"} py-3 px-6 text-sm font-medium text-black/80 rounded-md hover:bg-secondary/10 capitalize`} onClick={() => {
                setSelectData(value); 
                setShowDropdown(!selectData);
              }}
                key={index}
              >
                {value}
              </p>
            ))}
          </div>
        )}
      </button>
    </div>
  )
}

export default AppointmentDropdown;