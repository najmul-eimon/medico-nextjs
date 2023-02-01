import Image from 'next/image';
import {FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterestP} from 'react-icons/fa';
import BlogComments from './BlogComments';
import BlogDetailsTitle from './BlogDetailsTitle';
import PostComments from './PostComments';

const DetailsBlog = ({data}) => {
  const {time, mainImage, highlight, paragraph, pros, cons, comments} = data;

  return (
    <section className="blog-details pt-6 lg:pt-10">
      <div className="container">
        {/* title */}
        <BlogDetailsTitle data={data}/>

        {/* image */}
        <div className="my-6 md:my-10 rounded-lg lg:rounded-[20px] h-[180px] md:h-[250px] lg:h-auto overflow-hidden w-full">
          <Image src={mainImage} width={1296} height={403} className="w-full h-full object-cover" alt="Blog"/>
        </div>

        {/* details */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* left side */}
          <div className="lg:col-span-3 lg:pb-8 lg:border-b lg:border-[#E2E5F1]">
            <blockquote className="pb-8">
              <h6 className="text-sm md:text-base font-semibold text-primary-text">{highlight}</h6>
            </blockquote>

            {/* paragraph */}
            {
              paragraph?.slice(0, -1).map(({id, title, description}) => (
                <div key={id}>
                  <h4 className="pb-4 text-base md:text-2xl font-extrabold text-primary-text">{title}</h4>
                  {
                    description?.map((item, index) => (
                      <p key={index} className="text-sm md:text-base text-primary-text/60 pb-8">{item}</p>
                    ))
                  }
                </div>
              ))
            }
          
            {/* pros */}
            <h5 className="pb-4 text-base font-extrabold text-primary-text">PROS</h5>
            <ul className="space-y-1 ml-6 mb-8">
              {
                pros?.map((item, index) => (
                  <li key={index} className="list-disc text-primary-text/60 text-xs">
                    <p className="text-sm md:text-base text-primary-text/60">{item}</p>
                  </li>
                ))
              }
            </ul>

            {/* cons */}
            <h5 className="pb-4 text-base font-extrabold text-primary-text">CONS</h5>
            <ul className="space-y-1 ml-6 mb-8">
              {
                cons?.map((item, index) => (
                  <li key={index} className="list-disc text-primary-text/60 text-xs">
                    <p className="text-sm md:text-base text-primary-text/60">{item}</p>
                  </li>
                ))
              }
            </ul>

            {/* conclusion */}
            {
              paragraph?.slice(-1).map(({id, title, description}) => (
                <div key={id}>
                  <h4 className="pb-4 text-base md:text-2xl font-extrabold text-primary-text">{title}</h4>
                  {
                    description?.map((item, index) => (
                      <p key={index} className="text-sm md:text-base text-primary-text/60 pb-8 last:pb-0">{item}</p>
                    ))
                  }
                </div>
              ))
            }
          </div>

          {/* right side */}
          <div>
            <p className="text-sm md:text-base text-primary-text/60">{time} to read</p>
            <div className="flex items-center gap-6 mt-4">
              <h6 className="uppercase text-base font-semibold text-primary-text">share</h6>

              <ul className="flex items-center gap-2">
                <li>
                  <a href="#!" className="h-6 w-6 flex items-center justify-center">
                    <FaFacebookF className="text-[#3B5998] text-lg"/>
                  </a>
                </li>
                <li>
                  <a href="#!" className="h-6 w-6 flex items-center justify-center">
                    <FaTwitter className="text-[#1DA1F2] text-lg"/>
                  </a>
                </li>
                <li>
                  <a href="#!" className="h-6 w-6 flex items-center justify-center">
                    <FaGooglePlusG className="text-[#DB4A39] text-2xl"/>
                  </a>
                </li>
                <li>
                  <a href="#!" className="h-6 w-6 flex items-center justify-center">
                    <FaPinterestP className="text-[#BD081C] text-lg"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* comments */}
        <BlogComments comments={comments}/>

        {/* leave a comment */}
        <PostComments/>
      </div>
    </section>
  )
}

export default DetailsBlog;