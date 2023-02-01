import Image from "next/image";

const BlogComments = ({comments}) => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 mt-6 lg:mt-11">
      <div className="lg:col-span-3">
        <h4 className="text-base md:text-2xl font-bold text-primary-text pb-10 text-center md:text-left">{comments?.length} comments</h4>
        <ul className="divide-y-[1px] divide-[#E2E5F1]">
          {
            comments?.map(({id, ownerImage, owner, time, message}) => (
              <li key={id} className="py-8 first:pt-0 last:pb-0">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={ownerImage} height={48} width={48} className="w-full" alt="Author"/>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-primary-text">{owner}</p>
                    <span className="inline-block text-sm text-primary-text/40">{time}</span>
                  </div>
                </div>
                <p className="pt-3 text-sm md:text-base text-primary-text/60">{message}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default BlogComments;