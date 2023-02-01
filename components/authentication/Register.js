import { useState } from 'react';
import Link from 'next/link';
import {FaFacebookF} from 'react-icons/fa';
import {BsEyeSlash, BsEye} from 'react-icons/bs';
import Image from 'next/image';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="login">
      <div className="flex">
        {/* left part */}
        <div
          className="lg:w-[350px] xl:w-[400px] 2xl:w-[618px] h-screen left-bar flex-shrink-0 lg:p-6 xl:p-10 hidden lg:flex flex-col justify-between">
          <div>
            <Link href="/">
              <Image src="/images/logo-white.png" width={162} height={43} alt="Logo"/>
            </Link>
            <h2
              className="pt-20 text-white lg:text-[23px] lg:leading-9 xl:text-2xl xl:leading-10 2xl:text-[40px] 2xl:leading-[60px] font-semibold">
              Simply fill out the form to get started</h2>
          </div>
          <p className="lg:pb-10 2xl:pb-20 text-white text-sm max-w-[385px]">Protected by reCAPTCHA and subject to the
            Medico Privacy Policy and Terms of Service.</p>
        </div>

        {/* right part */}
        <div className="flex-grow flex flex-col-reverse lg:flex-col mt-14 lg:mt-0">
          <div className="pt-7 pb-3 lg:py-6 xl:py-10 px-6 2xl:pr-[200px] 3xl:pr-[312px] text-center lg:text-right">
            <p className="text-sm font-medium text-primary-text">Already have an account? <Link href="/signin"
                className="text-primary underline hover:underline">Sign in</Link></p>
          </div>

          <div className="h-[calc(100%-100px)] w-full flex items-center justify-center">
            <div className="py-3 px-6 w-full max-w-[416px]">
              <h4 className="text-base lg:text-2xl font-semibold text-primary-text pb-10">Register to Medico</h4>

              <ul className="flex items-center gap-4">
                <li>
                  <a href="#!" className="w-12 h-12 rounded-[5px] bg-[#045AB5] flex items-center justify-center">
                    <FaFacebookF className="text-xl text-white"/>
                  </a>
                </li>
                <li>
                  <a href="#!"
                    className="w-12 h-12 rounded-[5px] bg-white border border-[#DCDBDD] flex items-center justify-center">
                    <Image src="/images/svg/google.svg" width={20} height={20} alt="Google Icon"/>
                  </a>
                </li>
              </ul>

              <div className="flex items-center gap-[10px] my-6">
                <span className="block w-1/2 h-[1px] bg-[#DCDBDD]"></span>
                <p className="text-sm text-primary-text/60">or</p>
                <span className="block w-1/2 h-[1px] bg-[#DCDBDD]"></span>
              </div>

              <form action="#!">
                {/* Full Name */}
                <div className="mb-4">
                  <label htmlFor="full_name" className="block mb-2 text-base font-medium lg:font-semibold text-primary-text">Full Name</label>
                  <input type="text" id="full_name" placeholder="Enter your Full Name" className="outline-none border border-solid border-black/20 rounded-lg w-full h-10 px-[10px] text-sm text-primary-text placeholder:text-sm placeholder:text-primary-text/40"/>
                </div>

                {/* email */}
                <div className="mb-4">
                  <label htmlFor="email_signup" className="block mb-2 text-base font-medium lg:font-semibold text-primary-text">Email</label>
                  <input type="email" id="email_signup" placeholder="Enter your Email" className="outline-none border border-solid border-black/20 rounded-lg w-full h-10 px-[10px] text-sm text-primary-text placeholder:text-sm placeholder:text-primary-text/40"/>
                </div>

                {/* password */}
                <div className="mb-10">
                  <p className="mb-2 text-base font-medium lg:font-semibold text-primary-text">Password</p>
                  <label htmlFor="pass_signup" className="block relative">
                    <input type={showPassword ? 'text' : 'password'} id="pass_signup" placeholder="Enter your Password" className="input-psswd outline-none border border-solid border-black/20 rounded-lg w-full h-10 pl-[10px] pr-10 text-sm text-primary-text placeholder:text-sm placeholder:text-primary-text/40"/>
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="eye-btn absolute top-1/2 -translate-y-1/2 right-[10px] h-4 w-4 flex items-center justify-center">
                      {
                        showPassword ? 
                        <span className="h-5 eye-on">
                          <BsEye className="text-xl text-primary-text/60"/>
                        </span> :
                        <span className="h-5 eye-off">
                          <BsEyeSlash className="text-xl text-primary-text/60"/>
                        </span>
                      }
                    </button>
                  </label>
                </div>

                {/* submit button */}
                <button type="submit" className="w-full box-border py-3 text-center text-white text-sm font-semibold rounded-md bg-primary shadow-[0px_10px_10px_rgba(55,214,201,0.24)] hover:bg-primary-alt hover:shadow-none">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register;