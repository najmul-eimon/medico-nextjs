import SingleDepartment from './SingleDepartment';
import {departments} from '../../../data/department';
import Title from '../../shared/Title';

const Department = () => {
  return (
    <section className="departments py-10 lg:py-16">
      <div className="container">
        {/* title */}
        <Title title={"Departments"}/>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-0">
          {
            departments.map((department) => <SingleDepartment key={department.id} department={department}/>)
          }
        </div>
      </div>
    </section>
  )
}

export default Department;