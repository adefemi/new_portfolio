import BackgroundSpline from '../components/backgroundSpline'
import Header from '../components/header'
import { getHomeData, getSocialLinks } from '../components/request'
import { homeDataType, socialLinkType } from '../components/types'
import Image from "next/image"

interface contentType {
  homeData: homeDataType
  socialLinks: socialLinkType[]
}

export default function Home({homeData, socialLinks}: contentType) {
  return (
    <div className='container home-bg'>
      <BackgroundSpline />
      <div className="content demacation">
        <Header active='/'/>
        <BodyContent homeData={homeData} socialLinks={socialLinks} />
      </div>
      
    </div>
  )
}

const BodyContent = ({homeData, socialLinks}: contentType) => (
  <div className="bodyContent">
    <div className="infoArea">
      <h4>{homeData.welcome_title}</h4>
      <h1>{homeData.welcome_note}</h1>
      <p>{homeData.welcome_description}</p>

      <button>Download C.V</button>
    </div>
    <div className="visualArea">
      <div className="cover">
      <Image width="300" height="300" className='homeImage' alt='adefemi-image' src={homeData.user_image} />
      </div>
      <div className="social-container">
        <div className="info">connect with me</div>
        <div className="social-links">
          {socialLinks.map((item, index) => <SocialLink item={item} key={index} />)}
        </div>
      </div>
    </div>
  </div>
)

const SocialLink = ({item}:{item: socialLinkType}) => (
  <a href={item.link} target="_blank" className="link-item">
      <Image width="24" height="24" alt={item.name} src={item.icon} />
  </a>
)

export const getServerSideProps = async () => {
  const homeData = await getHomeData()
  const socialLinks = await getSocialLinks()

  return {
    props: {
      homeData,
      socialLinks
    }
  }
}