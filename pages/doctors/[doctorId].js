import { useEffect, useState } from 'react';
import { doctors } from "@/data/doctors";
import SingleDoctorDetails from '@/components/singleDoctor/singleDoctorDetails/SingleDoctorDetails';
import ClinicLocation from '@/components/singleDoctor/clinicLocation/ClinicLocation';
import Layout from '@/layout/Layout';

const DoctorDetails = ({doctor}) => {
  const [singleDoctor, setSingleDoctor] = useState({});

  useEffect(() => {
    setSingleDoctor(doctors.find(({id}) => id === parseInt(doctor)));
  },[doctor]);

  return (
    <Layout title="Doctor Details">
      <main className="mt-9 sm:mt-[55px] lg:mt-[67px] xl:mt-[83px]">
        <SingleDoctorDetails data={singleDoctor}/>
        <ClinicLocation/>
      </main>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const param = context.params.doctorId

  return {
    props: {
      doctor: param
    },
  }
}

export default DoctorDetails;