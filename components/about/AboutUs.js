import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="about py-10 lg:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-7 items-center">
          <div className="md:col-span-6 lg:col-span-5 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] leading-9 md:leading-[44px] lg:leading-[52px] xl:leading-[60px] font-semibold text-primary-text pb-8">“Health care should be affordable for everyone”</h3>
            <Image src="/images/signature.png" width={269} height={84} alt="Signature" className="mx-auto md:mx-0"/>
            <span className="inline-block text-primary-text text-base md:text-xl">CEO & Founder</span>
          </div>
          <div className="md:col-span-6 lg:col-span-7 text-center md:text-left">
            <p className="pb-4 text-sm lg:text-base text-primary-text/60">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p className="text-sm lg:text-base text-primary-text/60">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;