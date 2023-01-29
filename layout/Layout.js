import { useState, useEffect } from 'react';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Loader from '@/components/shared/Loader';

const Layout = ({children}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  
    const body = document.querySelector('body');
    loading ? body.style.overflow = "hidden" : body.style.overflow = "visible";
  }, [loading])

  return (
    <>
      {loading && <Loader/>}
      <Header/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout