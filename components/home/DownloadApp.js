import Image from 'next/image';

const DownloadApp = () => {
  return (
    <section className="download-app pb-10 md:py-10 lg:py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-12 items-center px-2 py-6 sm:pl-0 md:py-11 bg-gradient-to-r from-[#0686E6] to-[#045CB7] rounded-3xl">
          <div className="sm:col-span-5">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl leading-9 md:leading-[44px] lg:leading-[54px] 2xl:leading-[72px] font-bold text-center sm:hidden">Download our app and set appointment</h2>
            <div className="w-full text-center my-10 md:my-0">
              <Image src="/images/mock-up.png" alt="Mock up" width={172} height={337} className="mx-auto"/>
            </div>
          </div>
          <div className="sm:col-span-7">
            <h2 className="text-white pb-10 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl leading-9 md:leading-[44px] lg:leading-[54px] 2xl:leading-[72px] font-bold hidden sm:block">Download our app and set appointment</h2>
            <ul className="flex flex-col md:flex-row items-center sm:items-start md:items-center gap-4 lg:gap-10">
              <li>
                <a href="#!" className="rounded-[10px] overflow-hidden">
                  <Image src="/images/play-store.png" width={215} height={70} className="md:w-[170px] lg:w-auto" alt="Play store"/>
                </a>
              </li>
              <li>
                <a href="#!" className="rounded-[10px] overflow-hidden">
                  <Image src="/images/app-store.png" width={215} height={70} className="md:w-[170px] lg:w-auto" alt="App store"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadApp