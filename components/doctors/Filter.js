import { useState } from "react";
import SelectDropdown from "./SelectDropdown";

const Filter = () => {
  const [showLocation, setShowLocation] = useState(false);
  const [location, setLocation] = useState("Location");
  const locations = ["Location", "Dallas", "Houston", "Alexandria", "Northfield", "Jersey City", "Philadelphia", "San Diego"];

  const [showDepartment, setShowDepartment] = useState(false);
  const [department, setDepartment] = useState("Department");
  const departments = ["Department", "Medicine", "Cardiology", "Neuro Science", "Surgery", "Kidney & Urology", "Digestive", "Physology"];

  return (
    <div className="grid grid-cols-12 items-center gap-6">
      <div className="col-span-12 lg:col-span-4 xl:col-span-6">
        <label htmlFor="search">
          <input type="text" placeholder="Search by name" className="w-full border border-secondary/10 border-solid h-11 px-6 outline-none rounded-md text-sm text-primary-text font-semibold placeholder:text-sm placeholder:text-black/40 placeholder:font-semibold" />
        </label>
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
        <SelectDropdown showDropdown={showLocation} setShowDropdown={setShowLocation} selectData={location} setSelectData={setLocation} data={locations}/>
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
        <SelectDropdown showDropdown={showDepartment} setShowDropdown={setShowDepartment} selectData={department} setSelectData={setDepartment} data={departments}/>
      </div>
    </div>
  )
}

export default Filter;