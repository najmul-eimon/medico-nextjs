import Title from "../shared/Title";
import {blogs} from '@/data/blog';
import SingleBlog from "../blog/allBlogs/SingleBlog";

const FeaturedBlogs = () => {
  const featuredBlog = blogs.filter((blog) => blog.status.toLowerCase() === "featured");
  return (
    <section className="featured py-10 lg:py-16">
      <div className="container">
        {/* title */}
        <Title title={"Featured Articles"}/>

        {/* blogs */}
        <div className="grid grid-cold-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6 lg:gap-y-10">
          {
            featuredBlog.map((blog) => <SingleBlog key={blog.id} data={blog}/>)
          }
        </div>
      </div>
    </section>
  )
}

export default FeaturedBlogs;