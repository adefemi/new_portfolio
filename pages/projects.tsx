import { useState } from 'react'
import BackgroundSpline from '../components/backgroundSpline'
import Header from '../components/header'
import { getProjects} from '../components/request'
import { GearSvg, LinkArrowSvg } from '../components/svgs'
import {projectType } from '../components/types'

interface contentType {
  projects: projectType[]
}

export default function Project({projects}: contentType) {
  return (
    <div className='container home-bg about-bg project-bg'>
      <BackgroundSpline />
      <div className="content demacation">
        <Header active='/projects' />
        <div className="bodyContent">
          <div className="title">
            My Projects
          </div>

          <div className="content-grid">
            {projects?.map((item, i) => <ProjectCard key={i} project={item} />)}
          </div>
        </div>
      </div>
      
    </div>
  )
}

const ProjectCard = ({project}:{project: projectType}) => {

  const [showTool, setShowTool] = useState(false)

  return <div className="project-card" style={{backgroundImage: `url('${project.cover}')`}}>
    <div className="main-content">
      <div className="topContent">
        <div className="titleSection">
          <h3>{project.title}</h3>
          <p>{project.about}</p>
        </div>
        <a href={project.link} target="_blank" className='link' rel="noreferrer">
          <LinkArrowSvg />
        </a>
      </div>
      <div className="bottomContent">
        <div className="gear" onClick={() => setShowTool(!showTool)}>
          <GearSvg />
        </div>
      </div>
    </div>

    {
      showTool && <div className="tools">
        <h4>Tool Used</h4>
        <ul>
          {project.tool.map((item, i) => <li key={i}>{item.name}</li> )}
        </ul>
      </div>
    }
  </div>

}

export const getServerSideProps = async () => {
  const projects = await getProjects()

  return {
    props: {
      projects,
    }
  }
}