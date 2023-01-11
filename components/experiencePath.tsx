import { useEffect, useState } from "react";

export interface ExperiencePathProps {
    isFlip?: boolean;
    isClosed?: boolean;
    title: string
    position: string
    cover: string
    spaceTop?: number
    activities: string[]
    startDate: string
    endDate: string
}

const ExperiencePath = ({isFlip, isClosed, title, position, cover, spaceTop=20, activities, startDate, endDate}:ExperiencePathProps) => {

    const [finalSpacer, setFinalSpacer] = useState(spaceTop)
    const [offset, setOffset] = useState(-18)

    const handleResive = () => {
        const mql = window.matchMedia('(max-width: 768px)');

        if (mql.matches && spaceTop !== 20) {
            const offset = (100 / window.innerWidth) * 50;
            setOffset(offset)
            setFinalSpacer((spaceTop / window.innerWidth) * 400)
        }
        else{
            setFinalSpacer(spaceTop)
            setOffset(-18)
        }
    }

    useEffect(() => {
        handleResive()
        window.addEventListener("resize", handleResive)

        return () => window.removeEventListener('resize', handleResive);

    }, [])

    return <>
        {
            isFlip && <>
                <div />
                <div />
            </>
        }
        <div className={`pathContainer ${isFlip ? 'flip' : ''}`} style={{marginTop: spaceTop==20 ? 2 : finalSpacer - offset}}>
            <div className="c-logo" style={{backgroundImage: `url('${cover}')`}}></div>
            <div className="path">
                <div className="headerPath">
                    <div className="title">{title}</div>
                    <p>{position}</p>
                </div>
                <ul className="contextPath">
                    {activities.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <div className="cover">
                    <div className="dateShower">
                        <div className="start">{startDate}</div>
                        <div className="end">{endDate}</div>
                    </div>
                </div>
                <div className={`extender ${isClosed ? 'close' : ''}`} style={{height: finalSpacer}}></div>
            </div>
        </div>
    </>
}

export default ExperiencePath