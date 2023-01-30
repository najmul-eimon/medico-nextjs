import { useState } from "react";
import {doctors} from '@/data/doctors';
import SingleDoctor from "../shared/SingleDoctor";
import ReactPaginate from 'react-paginate';
import Filter from "./Filter";

const AllDoctors = () => { 
  const itemsPerPage = 9;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = doctors.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(doctors.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % doctors.length;
    setItemOffset(newOffset);
  };

  return (
    <section className="all-doctors pt-6 lg:pt-16 pb-6 lg:pb-10">
      <div className="container">
        {/* filter */}
        <Filter/>

        {/* all doctors */}
        <div className="mt-12 lg:mt-16 mb-4 lg:mb-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 md:gap-y-12">
          {
            currentItems.map((doctor) => <SingleDoctor key={doctor.id} data={doctor}/>)
          }
        </div>

        {/* pagination */}
        <ReactPaginate
          className="pagination"
          activeClassName="active-page"
          breakLabel="..."
          nextLabel="next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="prev"
          renderOnZeroPageCount={null}
        />
      </div>
    </section>
  )
}

export default AllDoctors;