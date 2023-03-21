import React from 'react';
import github from '../img/github.png';
import linkedin from '../img/linkedin2.png';


export default function Nav() {

    return (
        <footer>
            <div className="footer-wrap text-center mb-0 pb-0 profiles">
            <a href="https://github.com/jcgilbert70" target="_blank" rel="noopener noreferrer">
               <img src={github} style={{ width: '50px', height: '50px' }}/>
              </a> |&nbsp;
              
              
              <a href="https://www.linkedin.com/in/jeff-c-gilbert" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} style={{ width: '50px', height: '50px' }}/>
                </a>
            
            </div>
            <p className="footer-wrap text-center mb-0 pb-3">Jeff Gilbert. Copyright &copy; 2023.</p>
        </footer>  
    );
}