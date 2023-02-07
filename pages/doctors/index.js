import AllDoctors from '@/components/doctors/AllDoctors';
import Layout from '@/layout/Layout';

const Doctors = () => {
  return (
    <Layout title="All Doctors">
      <main className="mt-9 sm:mt-[55px] lg:mt-[67px] xl:mt-[83px]">
        <AllDoctors/>
      </main>
    </Layout>
  )
}

export default Doctors;