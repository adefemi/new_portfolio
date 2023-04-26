import DocCard from '../components/DocCard'
import BackgroundSpline from '../components/backgroundSpline'
import Header from '../components/header'
import { getBlogs } from '../components/request'
import { DocType } from '../components/types'

interface contentType {
  blogs: DocType[]
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
            {blogs?.map((item, i) => <DocCard key={i} {...item} />)}
          </div>
        </div>
      </div>

    </div>
  )
}

export const getServerSideProps = async () => {
  const blogs = await getBlogs()

  return {
    props: {
      blogs,
    }
  }
}