import React from 'react';
import '../../styles/About.css';
import me from '../../img/jeff.jpg';

export default function About() {
  return (
    <>
      <header>
        <h2>About Me</h2>
      </header>
      <article className="about section-content">
        <div className="avatar flx">
          <img src={me} alt="Jeff Gilbert" />
        </div>
        <div className="bio flx">
        <p>
        My name is Jeff Gilbert, 
        I built a career achieving a great amount of success managing multiple branches for an electrical distribution company. 
        I managed counter sales, inside sales, warehouse and driving teams, accounting for aprox $70 million in sales annually. 
        </p>
        <p>I have been competitive my whole life, having played sports my whole life, and football through college. 
        But anyone who has played offensive line at a competitive level knows that working together as one of the most important 
        aspects of being an offensive lineman. At this point in time I am looking to combine the skills that I have learned and 
        cultivated through sports, school,and career experiences to bring into my learning coding through Northwestern Universities 
        Coding Bootcamp.
        </p>
        <p>
        I look forward to bringing all that I learn into my next career and beyond.
        </p>
        </div>
      </article>
    </>
  );
}