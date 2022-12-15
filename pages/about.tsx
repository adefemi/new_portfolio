import BackgroundSpline from '../components/backgroundSpline'
import Header from '../components/header'
import { getAboutParagraphs} from '../components/request'
import { aboutType } from '../components/types'

interface contentType {
  paragraphs: aboutType[]
}

export default function About({paragraphs}: contentType) {
  return (
    <div className='container home-bg about-bg'>
      <BackgroundSpline className='aboutSpline'/>
      <div className="content demacation">
        <Header active='/about' isDark/>
        <BodyContent paragraphs={paragraphs} />
      </div>
      
    </div>
  )
}

const BodyContent = ({paragraphs}: contentType) => (
  <div className="bodyContent">
    <div className="title">
      About me
    </div>
    <div className="context">
      {paragraphs.map((item, index) => <p key={index}>{item.paragraph}</p>)}
    </div>
  </div>
)

export const getServerSideProps = async () => {
  const paragraphs = await getAboutParagraphs()

  return {
    props: {
      paragraphs,
    }
  }
}