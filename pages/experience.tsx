import ExperiencePath, { ExperiencePathProps } from "../components/experiencePath"
import Header from "../components/header"
import { getExperiences } from "../components/request"

const Experience = ({experiences}:{experiences: ExperiencePathProps[]}) => {

    const processExperience = () => {
        const finalResults = [experiences[0]]

        if (experiences.length > 1) {
            for (let i = 1; i < experiences.length; i++) {
                finalResults.push({
                    ...experiences[i],
                    spaceTop: experiences[i - 1].activities.length * 40
                })
            }
        }

        return finalResults
    }

    return <div className='container home-bg exp-bg'>
        <div className="content demacation">
            <Header active='/experience' />
            <h4 className="expTitle">MY JOURNEY SO FAR!</h4>
            <div className="exp">
                {
                    processExperience().map((item, i) => <ExperiencePath {...item} isClosed={i === 0} isFlip={i % 2 !== 0} key={i} />)
                }

            </div>
        </div>

    </div>


}

export default Experience


export const getServerSideProps = async () => {
    const results = await getExperiences()
    const experiences:ExperiencePathProps[] = []

    for(let i of results) {
        const activities:string[] = []
        for (let j of i.experience_inputs){
            activities.push(j.content)
        }
        experiences.push({
            title: i.name,
            position: i.title,
            cover: i.image,
            activities,
            startDate: i.start,
            endDate: i.end
        })
    }
  
    return {
      props: {
        experiences,
      }
    }
  }