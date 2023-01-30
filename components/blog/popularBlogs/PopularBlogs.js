import Link from 'next/link';
import {blogs} from '@/data/blog';
import SinglePopular from './SinglePopular';
import Image from 'next/image';

const PopularBlogs = () => {
  const highlightedBlog = blogs.filter((blog) => blog.status.toLowerCase() === "highlighted");
  const popularBlogs = blogs.filter((blog) => blog.status.toLowerCase() === "popular");

  return (
    <section className="popular-blogs pt-6 lg:pt-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-6">
          {/* big-blog */}
          <div className="lg:col-span-3 xl:col-span-2">
            {
              highlightedBlog.slice(0,1).map(({id, previewImage, blogTitle, author, authorDesignation}) => (
                <div key={id} className="rounded-[20px] overflow-hidden relative h-[288px] lg:h-auto">
                  <Image src={previewImage} className="w-full h-full object-cover" width={856} height={701} alt="Blog" />
                  <div className="absolute h-full w-full bg-black/40 inset-0 z-10 p-4 lg:p-6 xl:p-12 2xl:p-[66px] flex items-end">
                    <div>
                      <Link href={`/blog/${id}`} className="line-clamp block text-2xl lg:text-3xl xl:text-[40px] xl:leading-[60px] font-semibold text-white pb-2 lg:pb-4 xl:pb-6">{blogTitle}</Link>
                      <p className="text-base lg:text-xl font-semibold text-white">{author}</p>
                      <small className="inline-block font-light text-sm lg:text-base text-white">{authorDesignation}</small>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          {/* popular-blogs */}
          <div className="lg:col-span-2 xl:col-span-1 relative">
            <h4 className="pb-6 text-base lg:text-2xl font-semibold text-primary-text">Popular</h4>
            
            {/* popular blog list */}
            <ul className="space-y-6 custom-scrollbar lg:overflow-y-auto popular-blog-list lg:absolute lg:max-h-[calc(100%-56px)]">
              {
                popularBlogs.map((blog) => <SinglePopular key={blog.id} data={blog}/>)
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularBlogs;