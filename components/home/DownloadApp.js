import mockUp from '../../assets/images/mock-up.png';
import playStore from '../../assets/images/play-store.png';
import appleStore from '../../assets/images/app-store.png';
import { Link } from 'react-router-dom';

const DownloadApp = () => {
  return (
    <section className="download-app pb-10 md:py-10 lg:py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-12 items-center px-2 py-6 sm:pl-0 md:py-11 bg-gradient-to-r from-[#0686E6] to-[#045CB7] rounded-3xl">
          <div className="sm:col-span-5">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl leading-9 md:leading-[44px] lg:leading-[54px] 2xl:leading-[72px] font-bold text-center sm:hidden">Download our app and set appointment</h2>
            <div className="w-full text-center my-10 md:my-0">
              <img src={mockUp} alt="Mock up" className="mx-auto"/>
            </div>
          </div>
          <div className="sm:col-span-7">
            <h2 className="text-white pb-10 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl leading-9 md:leading-[44px] lg:leading-[54px] 2xl:leading-[72px] font-bold hidden sm:block">Download our app and set appointment</h2>
            <ul className="flex flex-col md:flex-row items-center sm:items-start md:items-center gap-4 lg:gap-10">
              <li>
                <Link to="/" className="rounded-[10px] overflow-hidden">
                  <img src={playStore} className="md:w-[170px] lg:w-auto" alt="Play store"/>
                </Link>
              </li>
              <li>
                <Link to="/" className="rounded-[10px] overflow-hidden">
                  <img src={appleStore} className="md:w-[170px] lg:w-auto" alt="App store"/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadApp