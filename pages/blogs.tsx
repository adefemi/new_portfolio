import BackgroundSpline from '../components/backgroundSpline'
import Header from '../components/header'
import { getBlogs } from '../components/request'
import { blogType } from '../components/types'

interface contentType {
  blogs: blogType[]
}

export default function Blogs({ blogs }: contentType) {
  return (
    <div className='container home-bg about-bg project-bg blog-bg'>
      <BackgroundSpline />
      <div className="content demacation">
        <Header active='/blogs' />
        <div className="bodyContent">
          <div className="title">
            My Blogs
          </div>

          <div className="content-grid">
            {blogs?.map((item, i) => <BlogCard key={i} blog={item} />)}
          </div>
        </div>
      </div>

    </div>
  )
}

const BlogCard = ({ blog }: { blog: blogType }) => {

  return <div className="blog-card" style={{ backgroundImage: `url('${blog.cover}')` }}>
    <div className="description">
      <a href={blog.link} target="_blank" rel="noreferrer">
      {blog.title}
      </a>
    </div>
  </div>

}

export const getServerSideProps = async () => {
  const blogs = await getBlogs()

  return {
    props: {
      blogs,
    }
  }
}