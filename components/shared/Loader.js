import Image from "next/image";

const Loader = () => {
  return (
    <div id="preloader" className="h-screen w-full bg-white z-50 fixed inset-0 flex items-center justify-center">
      <div className="zoom-in-out-box">
        <Image src="/images/logo.png" width={196} height={51} alt="Preloader"/>
      </div>
    </div>
  )
}

export default Loader;