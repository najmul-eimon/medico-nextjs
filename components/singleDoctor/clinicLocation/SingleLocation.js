import Image from "next/image";

const SingleLocation = ({data}) => {
  const {image, clinic, address} = data;

  return (
    <div className="group rounded-[10px] overflow-hidden bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] transition-all duration-300 ease-linear hover:shadow hover:shadow-[rgba(0,0,0,0.1)]">
      <div className="rounded-[10px] rounded-bl-none overflow-hidden">
        <Image src={image} width={306} height={180} className="w-full transition-all duration-500 group-hover:scale-110" alt="Location"/>
      </div>
      <div className="mt-[10px] p-[10px] text-center">
        <h4 className="text-base font-semibold text-primary-text">{clinic}</h4>
        <p className="pt-[10px] text-sm text-primary-text/60 whitespace-pre-line">{address}</p>
      </div>
    </div>
  )
}

export default SingleLocation;