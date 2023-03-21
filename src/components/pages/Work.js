import React from 'react';
import Project from '../Projects';
import canny from '../../img/CANNY.PNG';
import iss from '../../img/news-by-ISS-project.PNG';
import mealTrain from '../../img/Meal-Train.PNG';
import emailContact from '../../img/email-contact-form.png';
import passwordGenerator from '../../img/password-generator.png';
import codeQuiz from '../../img/code-quiz.png';
import workScheduler from '../../img/work-scheduler.png';
import weatherDashboard from '../../img/weather-dashboard.png';

import '../../styles/Work.css';


const project = [
    {
        link: 'https://meal-train-ab.herokuapp.com/',
        repo: 'https://github.com/TrilogyHi5/meal-train.git',
        img: mealTrain,
        caption: 'Meal Train',
    },   
    {
        link: 'https://canny.herokuapp.com/',
        repo: 'https://github.com/CannyCreators/canny.git',
        img: canny,
        caption: 'Canny',
    },    
    {
        link: 'https://teamjustalright.github.io/iss-tracker/',
        repo: 'https://github.com/teamJustAlright/iss-tracker.git',
        img: iss,
        caption: 'News by ISS',
    },
    {
        link: 'https://jcgilbert70.github.io/email-contact-form/',
        repo: '',
        img: emailContact,
        caption: 'Email Contact Form',
    },
    {
        link: 'https://jcgilbert70.github.io/password-generator/',
        repo: '',
        img: passwordGenerator,
        caption: 'Password Generator',
    },
    {
        link: 'https://jcgilbert70.github.io/code-quiz/',
        repo: '',
        img: codeQuiz,
        caption: 'Code Quiz',
    },
    {
        link: 'https://jcgilbert70.github.io/work-scheduler/',
        repo: '',
        img: workScheduler,
        caption: 'Work Scheduler',
    },
    {
        link: 'https://jcgilbert70.github.io/work-scheduler/',
        repo: '',
        img: weatherDashboard,
        caption: 'Weather Dashboard',
    },
];

function Work() {

    return (

        <>
            <header>
                <h2>Work</h2>
            </header>
            <article className="section-content work">
                <Project project={project} />
            </article>
        </>
    );
}

export default Work;