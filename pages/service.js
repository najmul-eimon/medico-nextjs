import Pricing from "@/components/service/pricing/Pricing";
import ServiceIntro from "@/components/service/ServiceIntro";
import Video from "@/components/service/video/Video";
import Services from "@/components/shared/service/Services";
import Layout from "@/layout/Layout";

const Service = () => {
  return (
    <Layout title="Service">
      <main className="mt-9 sm:mt-[55px] lg:mt-[67px] xl:mt-[83px]">
        {/* page title */}
        <div className="page-title pt-6 lg:pt-12 pb-3 lg:pb-6">
          <div className="container">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-semibold text-primary-text text-center">Services</h2>
          </div>
        </div>

        <ServiceIntro/>
        <Services/>
        <Video/>
        <Pricing/>
      </main>
    </Layout>
  )
}

export default Service;