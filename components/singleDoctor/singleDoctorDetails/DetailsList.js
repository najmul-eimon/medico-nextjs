
const DetailsList = ({listName, listData}) => {
  return (
    <li className="flex flex-col md:flex-row md:items-center gap-2 lg:gap-6 py-2 xl:py-6 first:pt-0 last:pb-0">
      <h4 className="w-full md:w-32 lg:w-[180px] flex-shrink-0 text-base xl:text-xl font-semibold text-primary-text/60">{listName}</h4>
      <p className="text-base xl:text-xl text-secondary break-words w-full">
        {
          listData?.map((data, index) => <span key={index} className="inline-block after:content-[','] after:pr-1 last:after:content-['']">{data}</span>)
        }
      </p>
    </li>
  )
}

export default DetailsList;