import Appoint from '@/components/appointment/Appoint';
import Layout from '@/layout/Layout';

const appointment = () => {
  return (
    <Layout title="Appointment">
      <main className="mt-9 sm:mt-[55px] lg:mt-[67px] xl:mt-[83px]">
        <Appoint/>
      </main>
    </Layout>
  )
}

export default appointment;