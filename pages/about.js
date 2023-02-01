import AboutUs from '@/components/about/AboutUs';
import CertifiedDoctors from '@/components/about/CertifiedDoctors';
import History from '@/components/about/history/History';
import Service from '@/components/shared/service/Services';
import WhyUs from '@/components/shared/whyUs/WhyUs';
import Layout from '@/layout/Layout';

const About = () => {
  return (
    <Layout title="About">
      <main className="mt-9 sm:mt-[55px] lg:mt-[67px] xl:mt-[107px]">
        <AboutUs/>
        <Service/>
        <WhyUs/>
        <History/>
        <CertifiedDoctors/>
      </main>
    </Layout>
  )
}

export default About;