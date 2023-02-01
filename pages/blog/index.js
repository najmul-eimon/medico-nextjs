import Head from 'next/head';
import AllBlogs from '@/components/blog/allBlogs/AllBlogs';
import PopularBlogs from '@/components/blog/popularBlogs/PopularBlogs';
import Layout from '@/layout/Layout';

const Blog = () => {
  return (
    <Layout title="Blog">
      <main className="mt-9 sm:mt-[55px] lg:mt-[67px] xl:mt-[83px]">
        <PopularBlogs/>
        <AllBlogs/>
      </main>
    </Layout>
  )
}

export default Blog;