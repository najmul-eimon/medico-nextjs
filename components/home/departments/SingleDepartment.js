import {RiSendPlaneLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const SingleDepartment = ({department}) => {
  const {departmentName, description, icon} = department;

  return (
    <div className="single-department p-4 md:py-4 md:px-14 text-center border-black/5">
      <div className="h-20 md:h-[120px] w-20 md:w-[120px] flex items-center justify-center mx-auto">
        <img src={icon} alt="heart icon"/>
      </div>
      <div className="py-2 my-2">
        <h4 className="text-xl lg:text-2xl text-primary-text font-medium">{departmentName}</h4>
        <p className="text-sm text-primary-text/60">{description}</p>
      </div>
      <Link to="/service" className="mx-auto flex items-center justify-center gap-1 rounded-[5px] py-2 w-[148px] md:w-[135px] text-sm font-semibold text-secondary border border-secondary/20 bg-secondary/10 hover:bg-secondary hover:border-secondary hover:text-white group">
        Read More
        <RiSendPlaneLine className="text-lg transition-[width] duration-200 w-0 overflow-hidden group-hover:w-[18px]"/>
      </Link>
    </div>
  )
}

export default SingleDepartment;