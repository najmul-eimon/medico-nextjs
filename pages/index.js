import Banner from '@/components/home/Banner';
import Department from '@/components/home/departments/Department';
import DownloadApp from '@/components/home/DownloadApp';
import Service from '@/components/shared/service/Services';
import WhyUs from '@/components/shared/whyUs/WhyUs';
import Layout from '@/layout/Layout';

export default function Home() {
  return (
    <Layout title="Home">
      <main className="mt-9 sm:mt-[55px] lg:mt-[67px] xl:mt-0">
        <Banner/>
        <Service/>
        <WhyUs/>
        <Department/>
        <DownloadApp/>
      </main>
    </Layout>
  )
}
