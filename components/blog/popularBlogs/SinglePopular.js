import Image from "next/image";
import Link from "next/link";

const SinglePopular = ({data}) => {
  const {id, previewImage, blogTitle, time, date} = data;
  return (
    <li className="flex items-center gap-2 lg:gap-4 xl:gap-6">
      {/* <!-- image --> */}
      <div className="flex-shrink-0 h-[86px] w-[86px] rounded-lg overflow-hidden">
        <Image src={previewImage} className="w-full h-full object-cover" width={306} height={180} alt="Blog"/>
      </div>

      {/* <!-- blog name --> */}
      <div>
        <Link href={`/blog/${id}`} className="line-clamp inline-block mb-2 text-base font-medium text-primary-text hover:text-secondary">{blogTitle}</Link>
        <ul className="flex items-center gap-4">
          <li><p className="text-xs text-primary-text/40">{time} to read</p></li>
          <li><p className="text-xs text-primary-text/40">{date} </p></li>
        </ul>
      </div>
    </li>
  )
}

export default SinglePopular;