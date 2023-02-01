import { useEffect, useState } from 'react';
import Head from 'next/head';
import DetailsBlog from '@/components/blogDetails/DetailsBlog';
import { blogs } from '@/data/blog';
import FeaturedBlogs from '@/components/featuredBlogs/FeaturedBlogs';
import Layout from '@/layout/Layout';

const BlogDetails = ({param}) => {
  const [singleBlog, setSingleBlog] = useState({});

  useEffect(() => {
    setSingleBlog(blogs.find(({id}) => id === parseInt(param)));
  },[param]);

  return (
    <Layout title="Blog Details">
      <main className="mt-9 sm:mt-[55px] lg:mt-[67px] xl:mt-[83px]">
        <DetailsBlog data={singleBlog} />
        <FeaturedBlogs/>
      </main>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const param = context.params.blogId

  return {
    props: {
      param
    }, 
  }
}

export default BlogDetails;