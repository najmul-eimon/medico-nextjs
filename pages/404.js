import Header from '@/components/navigation/Header';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Medico | Not Found</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header/>

      <main className="mt-9 sm:mt-[55px] lg:mt-[67px] xl:mt-[83px]">
        <section className="not-found pt-[124px]">
          <div className="container">
            <div className="text-center max-w-[712px] mx-auto">
              <Image src="/images/404.png" width={482} height={165} className="mx-auto" alt="Not Found"/>
              <h3 className="text-xl sm:text-2xl md:text-3xl xl:text-[40px] font-bold text-primary-text pt-6 xl:pt-10 pb-6">Page Not Found</h3>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl text-primary-text/40 pb-10 xl:pb-20">We are sorry, the page you requested could not be found. Please go back to the home page</p>
              <Link href="/" className="inline-block box-border py-2 lg:py-3 px-9 md:px-8 lg:px-12 text-white text-sm font-semibold rounded-md bg-primary shadow-[0px_10px_10px_rgba(55,214,201,0.24)] hover:bg-primary-alt hover:shadow-none">Go back to home</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default NotFound;