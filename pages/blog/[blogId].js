import { useEffect, useState } from 'react';
import DetailsBlog from '@/components/blogDetails/DetailsBlog';
import { blogs } from '@/data/blog';
import FeaturedBlogs from '@/components/featuredBlogs/FeaturedBlogs';
import Layout from '@/layout/Layout';

const BlogDetails = ({blog}) => {
  const [singleBlog, setSingleBlog] = useState({});

  useEffect(() => {
    setSingleBlog(blogs.find(({id}) => id === parseInt(blog)));
  },[blog]);

  return (
    <Layout title="Blog Details">
      <main className="mt-9 sm:mt-[55px] lg:mt-[67px] xl:mt-[83px]">
        <DetailsBlog data={singleBlog} />
        <FeaturedBlogs/>
      </main>
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  const param = context.params.blogId

  return {
    props: {
      blog: param
    }, 
  }
}


export default BlogDetails;