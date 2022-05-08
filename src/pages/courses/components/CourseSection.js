import React  from 'react';
import { Styles } from '../styles/course';
import CourseLesson from './CourseLesson';


const CourseSection = ({ section, key , selectMedia }) => {

  

    


    return (


        <div>
          <Styles>

                <div className="course-item" key={key}>
                    <button className="course-button active">Section {section.sectionNumber}: {section.sectionTitle} 
                    {/* <span>04 Lectures - 30 Min</span> */}
                    </button>
                    <div className="course-content show">
                        <ul className="list-unstyled">
                            {section.Lessons.map((lesson, key) => (
                                <CourseLesson lesson={lesson} key={key} selectMedia={selectMedia} />))
                            }


                        </ul>
                    </div>
                </div>

            </Styles>


        </div>


    );
};

export default CourseSection;