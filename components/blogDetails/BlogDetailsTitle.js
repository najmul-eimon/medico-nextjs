import Image from "next/image";

const BlogDetailsTitle = ({data}) => {
  const {blogTitle, category, time, date, authorImage, author, authorDesignation} = data;
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 2xl:gap-6 lg:items-end">
      <div className="lg:col-span-3">
        <h2 className="text-2xl leading-9 md:text-3xl md:leading-10 2xl:text-[40px] 2xl:leading-[60px] font-semibold text-primary-text">{blogTitle}</h2>
        <ul className="flex items-center divide-x-[1px] divide-[#E2E5F1] mt-4">
          <li className="pr-[14px] sm:pr-4"><span className="inline-block truncate px-6 rounded-[100px] bg-secondary text-white leading-6 text-xs max-w-[82px] sm:max-w-full">{category}</span></li>
          <li className="px-[14px] sm:px-4"><p className="text-xs text-primary-text/40">{time} to read</p></li>
          <li className="pl-[14px] sm:pl-4"><p className="text-xs text-primary-text/40">{date}</p></li>
        </ul>
      </div>

      {/* author */}
      <div className="flex items-center gap-4">
        <div className="h-[60px] w-[60px] rounded-full overflow-hidden flex-shrink-0">
          <Image src={authorImage} width={60} height={60} className="w-full" alt="Blog Author"/>
        </div>
        <div>
          <h5 className="pb-1 text-base font-semibold text-primary-text">{author}</h5>
          <h6 className="text-sm md:text-base lg:text-sm xl:text-sm 2xl:text-base text-secondary">{authorDesignation}</h6>
        </div>
      </div>
    </div>
  )
}

export default BlogDetailsTitle;