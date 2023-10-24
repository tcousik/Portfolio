import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'

const Experience = () => {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2007 - 2011'
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title' style={{ textAlign: "center" }}>
                        Bloomington High School North
                    </h3>
                    <p style={{ textAlign: "center" }}>High School Diploma</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date='2019 - 2023'
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title" style={{ textAlign: "center" }}>
                        University of Colorado - Denver
                    </h3>
                    <p style={{ textAlign: "center" }}> B.A. in Computer Science</p>
                </VerticalTimelineElement>
            </VerticalTimeline></div >
    )
}

export default Experience