import Link from 'next/link';
import Image from 'next/image';
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube} from 'react-icons/fa';
import {HiOutlineEnvelope, HiOutlineMapPin} from 'react-icons/hi2';
import {IoCallOutline} from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-[#393C45] py-5 md:py-10">

      {/* footer-top start */}
      <section className="footer-top pb-6">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-12 gap-6">

            {/* company */}
            <div className="sm:col-span-3 lg:col-span-4 text-center lg:text-left">
              <Link href="/" className="inline-block mx-auto lg:mx-0 w-[150px] md:w-auto">
                <Image src="/images/footer-logo.png" width={196} height={51} alt="Logo"/>
              </Link>
              <p className="text-white/60 text-sm lg:text-base py-4 md:py-6">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam. Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p>
              <ul className="flex items-center justify-center lg:justify-start gap-6">
                <li>
                  <a href="#!" className="group">
                    <FaFacebookF className="fab fa-facebook-f text-white/60 transition-all duration-300 group-hover:text-primary"/>
                  </a>
                </li>
                <li>
                  <a href="#!" className="group">
                    <FaTwitter className="fab fa-twitter text-white/60 transition-all duration-300 group-hover:text-primary"/>
                  </a>
                </li>
                <li>
                  <a href="#!" className="group">
                    <FaInstagram className="fab fa-instagram text-white/60 transition-all duration-300 group-hover:text-primary"/>
                  </a>
                </li>
                <li>
                  <a href="#!" className="group">
                    <FaLinkedinIn className="fab fa-linkedin-in text-white/60 transition-all duration-300 group-hover:text-primary"/>
                  </a>
                </li>
                <li>
                  <a href="#!" className="group">
                    <FaYoutube className="fab fa-youtube text-white/60 transition-all duration-300 group-hover:text-primary"/>
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-3 text-center sm:text-left">
              <h4 className="pb-6 md:pb-10 text-white font-bold text-base md:text-xl">Company</h4>
              <ul className="space-y-4 lg:space-y-[18px]">
                <li><Link href="/" className="text-sm lg:text-base text-white/60 hover:text-primary">Home</Link></li>
                <li><Link href="/service" className="text-sm lg:text-base text-white/60 hover:text-primary">Services</Link></li>
                <li><Link href="/doctors" className="text-sm lg:text-base text-white/60 hover:text-primary">All Doctors</Link></li>
                <li><Link href="/blog" className="text-sm lg:text-base text-white/60 hover:text-primary">Blog</Link></li>
                <li><Link href="/appointment" className="text-sm lg:text-base text-white/60 hover:text-primary">Appointment</Link></li>
              </ul>
            </div>

            {/* services */}
            <div className="lg:col-span-2 text-center sm:text-left">
              <h4 className="pb-6 md:pb-10 text-white font-bold text-base md:text-xl">Services</h4>
              <ul className="space-y-4 lg:space-y-[18px]">
                <li><Link href="/service" className="text-sm lg:text-base text-white/60 hover:text-primary">Visit A Doctor</Link></li>
                <li><Link href="/service" className="text-sm lg:text-base text-white/60 hover:text-primary">Health Checkup</Link></li>
                <li><Link href="/service" className="text-sm lg:text-base text-white/60 hover:text-primary">Pharmacy</Link></li>
                <li><Link href="/service" className="text-sm lg:text-base text-white/60 hover:text-primary">Hospital</Link></li>
                <li><Link href="/service" className="text-sm lg:text-base text-white/60 hover:text-primary">Diagnostic</Link></li>
                <li><Link href="/service" className="text-sm lg:text-base text-white/60 hover:text-primary">Surgery</Link></li>
              </ul>
            </div>

            {/* contact */}
            <div className="lg:col-span-3 text-center sm:text-left">
              <h4 className="pb-5 md:pb-10 text-white font-bold text-base md:text-xl">Contact us</h4>
              <ul className="space-y-4 lg:space-y-7">
                <li className="flex flex-row gap-2 justify-center sm:justify-start">
                  <HiOutlineEnvelope className="ph-envelope-simple text-xl text-white inline-block sm:mt-[2px]"/>
                  <p className="text-base text-white/60 lg:w-[calc(100%-20px)] truncate">contact@company.com</p>
                </li>
                <li className="flex flex-row gap-2 justify-center sm:justify-start">
                  <IoCallOutline className="ph-phone text-xl text-white inline-block sm:mt-[2px]"/>
                  <p className="text-base text-white/60 lg:w-[calc(100%-20px)] truncate">(414) 687 - 5892</p>
                </li>
                <li className="flex flex-row gap-2 justify-center sm:justify-start">
                  <HiOutlineMapPin className="ph-map-pin text-xl text-white inline-block sm:mt-[2px]"/>
                  <p className="text-base text-white/60 lg:w-[calc(100%-20px)] truncate">794 Mcallister St <br className="hidden md:block"/> Knoxville, TN</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* footer-top end */}

      {/* footer-bottom start */}
      <section className="footer-bottom">
        <div className="container">
          <div className="flex items-center justify-center border-t border-white/20 pt-6">
            <p className="text-white/60 text-sm lg:text-base">Copyright © 2022 Medico</p>
          </div>
        </div>
      </section>
      {/* footer-bottom end */}
    </footer>
  )
}

export default Footer