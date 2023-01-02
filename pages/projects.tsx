import BackgroundSpline from '../components/backgroundSpline'
import Header from '../components/header'
import { GearSvg, LinkArrowSvg } from '../components/svgs'
import { getProject } from '../components/request'
import { projectType } from '../components/types'
import { useState } from 'react'

interface contentType {
  projects: projectType[]
}

export default function About({ projects }: contentType) {
  return (
    <div className='container home-bg about-bg projects-bg'>
      <BackgroundSpline />
      <div className="content demacation">
        <Header active='/projects' />
        <div className="bodyContent">
          <div className="title">
            My Projects
          </div>

          <div className="content-grid">
            {projects.map((item, i) => <ProjectCard project={item} key={i} />)}
          </div>
        </div>
      </div>

    </div>
  )
}

const ProjectCard = ({ project }: { project: projectType }) => {

  const [showTool, setShowTool] = useState(false)

  return <div className='project-card' style={{ backgroundImage: `url('${project.cover}')` }}>
    <div className="main-content">
      <div className="top-content">
        <div className="titleSection">
          <h3>{project.title}</h3>
          <p>{project.about}</p>
        </div>
        <a href={project.link} target="_blank" className='link'>
          <LinkArrowSvg />
        </a>
      </div>
      <div className="bottomSection">
        <div className="gear" onClick={() => setShowTool(!showTool)}>
          <GearSvg />
        </div>
      </div>

      {
        showTool && <div className="tools">
          <div className="h4">Tool Used</div>

          <ul>
            {project.tool.map((item, i) => <li key={i}>{item.name}</li>)}
          </ul>
        </div>
      }
    </div>
  </div>
}

export const getServerSideProps = async () => {
  const projects = await getProject()

  return {
    props: {
      projects,
    }
  }
}