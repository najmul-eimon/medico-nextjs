import { useEffect, useState } from 'react';
import {blogs} from '../../../data/blog';
import SingleBlog from './SingleBlog';
import {RiSearchLine} from 'react-icons/ri';

const AllBlogs = () => {
  const [active, setActive] = useState('all');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const filterCategories = ['all', 'clinic', 'health checkup', 'modern life'];

  const handleFilter = (category) => {
    if(category.toLowerCase() === 'all'){
      setFilteredBlogs(blogs);
      setActive('all');
    }
    else{
      setFilteredBlogs(blogs.filter((blog) => blog.category.toLowerCase() === category.toLowerCase()));
      setActive(category);
    }
  }

  const handleShowInput = () => {
    if(window.innerWidth > 1023){
      setShowSearchInput(!showSearchInput);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', function(){
      if(window.innerWidth < 1023){
        setShowSearchInput(false);
      }
    });
  }, []);

  return (
    <section className="blogs py-6 lg:py-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6 mt-6 lg:mt-0 lg:mb-10">

          {/* blog filter buttons */}
          <ul className="blog-filter-btns flex items-center gap-2 lg:gap-6 w-full overflow-x-auto scrollbar-hidden">
            {
              filterCategories.map((singleCategory, index) => (
                <li key={index}>
                  <button onClick={() => handleFilter(singleCategory)} type="button" className={`${singleCategory === active ? 'text-secondary bg-secondary/10' : ''} capitalize hover:text-secondary hover:bg-secondary/10 whitespace-nowrap px-6 py-2 md:py-3 text-sm text-primary-text font-semibold rounded-md border border-solid border-secondary/20`}>{singleCategory}</button>
                </li>
              ))
            }
          </ul>

          {/* search blogs */}
          <label htmlFor="search-blog" className="flex items-center w-full lg:w-fit rounded-md border border-solid border-secondary/10">
            <button type="button" onClick={handleShowInput} className="search-blog-btn h-11 w-11 flex items-center justify-center">
              <RiSearchLine className="text-xl text-black/40"/>
            </button>
            <input type="text" id="search-blog" placeholder="Search Blog" className={`${showSearchInput ? 'w-[350px] xl:w-[482px] xl:pr-4' : 'w-full lg:w-0'} search-blog-input outline-none transition-all duration-300 ease-linear h-11 pr-4 md:pr-0 rounded-md text-sm font-normal md:font-semibold text-primary-text placeholder:text-sm placeholder:text-black/40 placeholder:font-normal md:placeholder:font-semibold`}/>
          </label>

        </div>

        {/* all blogs */}
        <div id="blog-container" className="grid grid-cold-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6 lg:gap-y-10">
          {
            filteredBlogs.map((blog) => <SingleBlog key={blog.id} data={blog}/>)
          }
        </div>
      </div>
    </section>
  )
}

export default AllBlogs;