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

const ExperiencePath = ({isFlip, isClosed, title, position, cover, spaceTop=20, activities, startDate, endDate}:ExperiencePathProps) => (
    <>
        {
            isFlip && <>
                <div />
                <div />
            </>
        }
        <div className={`pathContainer ${isFlip ? 'flip' : ''}`} style={{marginTop: spaceTop==20 ? 2 : spaceTop - 18}}>
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
                <div className={`extender ${isClosed ? 'close' : ''}`} style={{height: spaceTop}}></div>
            </div>
        </div>
    </>
)

export default ExperiencePath