import Image from 'next/image';
import Link from 'next/link';
import bannerImg from '../../public/images/banner.jpg';

const Banner = () => {
  return (
    <section className="banner">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 pt-10 md:pt-0">
        {/* text content */}
        <div className="pl-4 pr-4 md:pr-0 2xl:pl-[120px] 3xl:pl-[305px]">
          <h1 className="text-2xl lg:text-4xl xl:text-[40px] 2xl:text-5xl leading-9 lg:leading-[58px] 2xl:leading-[72px] font-bold text-primary-text text-center md:text-left">We Are Always Ensure Best Medical Treatment</h1>
          <p className="pt-4 text-base md:text-sm lg:text-base text-primary-text/60 text-center md:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text </p>
          
          <ul className="flex flex-col md:flex-row items-center gap-6 my-6 xl:my-8 2xl:my-10">
            <li><Link href="/appointment" className="inline-block box-border py-2 lg:py-3 px-9 md:px-8 lg:px-12 text-white text-sm font-semibold rounded-md bg-primary shadow-[0px_10px_10px_rgba(55,214,201,0.24)] hover:bg-primary-alt hover:shadow-none">Appointment</Link></li>
            <li><Link href="/doctors" className="inline-block box-border py-2 lg:py-3 px-9 md:px-8 lg:px-12 text-primary text-sm font-semibold rounded-md bg-white border border-primary">Find a Doctor</Link></li>
          </ul>
          
          <div className="flex flex-col lg:flex-row items-center md:items-start lg:items-center gap-2 xl:gap-6">
            <div className="py-2 px-4 lg:p-4 text-center md:text-left">
              <small className="block text-sm font-medium text-primary-text/60">emergency cases</small>
              <h5 className="lg:pt-2 text-base lg:text-lg font-bold text-primary-text">+1 (800) 450 7550</h5>
            </div>
            <div className="py-2 px-4 lg:p-4 text-center md:text-left">
              <small className="block text-sm font-medium text-primary-text/60">online consultation</small>
              <h5 className="lg:pt-2 text-base lg:text-lg font-bold text-primary-text">consultation@medico.xyz</h5>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="h-[192px] sm:h-[300px] md:h-auto w-full px-4 md:px-0">
          <Image src={bannerImg} alt="Banner" className="w-full h-full object-cover"/>
        </div>
      </div>
    </section>
  )
}

export default Banner;