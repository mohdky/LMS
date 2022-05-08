import React from 'react';
import { Styles } from '../styles/course';


const CourseLesson = ({lesson,key ,selectMedia}) => {
    return (
        <div>
            <Styles>
                <li style={{ cursor: 'pointer' }} key ={key} onClick={()=>selectMedia(lesson.iFrame)} >
                    <span className="play-icon"><i className="las la-play"></i> Lecture: {lesson.number}</span>
                    <span className="lecture-title"> {lesson.lessonTitle} </span>
                    {/* <span className="lecture-duration">02:36</span> */}


                </li>
            </Styles>

        </div>
    );
};

export default CourseLesson;



