import Image from 'next/image';
import Link from 'next/link';

const SingleBlog = ({data}) => {
  const {id, previewImage, category, blogTitle, time, date, details} = data;

  const handleBlog = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }

  return (
    <div className="blog-item mix clinic">
      <Link href={`/blog/${id}`} onClick={handleBlog} className="block group rounded-[10px] bg-white overflow-hidden shadow-[0px_0px_16px_rgba(0,0,0,0.08)] hover:shadow hover:shadow-[rgba(0,0,0,0.08)]">
        {/* image */}
        <div className="overflow-hidden w-full h-[180px]">
          <Image src={previewImage} width={306} height={180} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-linear" alt="Blog"/>
        </div>

        {/* content */}
        <div className="-mt-3 ml-[10px] relative z-10">
          <span className="inline-block capitalize px-6 rounded-[100px] bg-secondary text-white leading-6 text-xs">{category}</span>
        </div>

        <div className="p-[10px] mt-3">
          <h4 className="line-clamp text-base font-semibold text-primary-text">{blogTitle}</h4>
          <p className="text-xs text-primary-text/40 py-4">{details}</p>
          <div className="flex items-center justify-between pt-4 border-t border-black/10">
            <p className="text-xs text-primary-text/60">{time} to read</p>
            <p className="text-xs text-primary-text/60">{date}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SingleBlog;