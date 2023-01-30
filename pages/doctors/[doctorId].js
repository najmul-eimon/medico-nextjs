import { useEffect, useState } from 'react';
import Head from 'next/head';
import { doctors } from "@/data/doctors";
import SingleDoctorDetails from '@/components/singleDoctor/singleDoctorDetails/SingleDoctorDetails';
import ClinicLocation from '@/components/singleDoctor/clinicLocation/ClinicLocation';

const DoctorDetails = ({param}) => {
  const [singleDoctor, setSingleDoctor] = useState({});

  useEffect(() => {
    setSingleDoctor(doctors.find(({id}) => id === parseInt(param)));
  },[param]);

  return (
    <>
      <Head>
        <title>Medico | Doctor Details</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-9 sm:mt-[55px] lg:mt-[67px] xl:mt-[83px]">
        <SingleDoctorDetails data={singleDoctor}/>
        <ClinicLocation/>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const param = context.params.doctorId

  return {
    props: {
      param
    }, 
  }
}

export default DoctorDetails;