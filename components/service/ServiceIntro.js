
const ServiceIntro = () => {
  return (
    <section className="service-intro py-10 lg:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-5 text-center md:text-left">
            <h3 className="text-2xl lg:text-[34px] xl:text-[40px] leading-9 lg:leading-[52px] xl:leading-[60px] font-semibold text-primary-text">We are a progressive medical clinic.</h3>
          </div>
          <div className="md:col-span-7 text-center md:text-left">
            <p className="pb-4 text-sm lg:text-base text-primary-text/60">Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <p className="text-sm lg:text-base text-primary-text/60">Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceIntro;