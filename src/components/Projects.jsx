import React, { useState } from 'react';
import texts from "../utils/Language/text.json";
import "./styles/Projects.css";

export const Projects = ({ idiom }) => {

  const [hiddenProject1, setHiddenProject1] = useState(false);
  const [hiddenProject2, setHiddenProject2] = useState(false);
  const [hiddenProject3, setHiddenProject3] = useState(false);
  const [hiddenProject4, setHiddenProject4] = useState(false);

  const mouseOverProject1 = () => setHiddenProject1(true);
  const mouseOutProject1 = () => setHiddenProject1(false);

  const mouseOverProject2 = () => setHiddenProject2(true);
  const mouseOutProject2 = () => setHiddenProject2(false);

  const mouseOverProject3 = () => setHiddenProject3(true);
  const mouseOutProject3 = () => setHiddenProject3(false);

  const mouseOverProject4 = () => setHiddenProject4(true);
  const mouseOutProject4 = () => setHiddenProject4(false);

  return (
    <section id='projects' className='Projects grid--container'>
      <h2 className='Projects__title'>{texts[idiom].project.my} <span>{texts[idiom].project.projects}</span></h2>
      <p className='Projects__description'>{texts[idiom].project.text}</p>
      <div className='Projects__projects'>
        <div
          onMouseEnter={mouseOverProject1}
          onMouseLeave={mouseOutProject1}
          className='Projects__project img-size'>
          <div
            style={{ display: hiddenProject1 ? "block" : "none" }}
            className="hidden-content">
            <p className='Projects__name'>UserCRUD</p>
            <span><i className='bx bxl-react' ></i></span>
            <span><i className='bx bxl-javascript' ></i></span>
            <span><i className='bx bxl-css3' ></i></span>
            <div className='Projects__link'><a target='_blank' href="https://create-your-user-crud.netlify.app"><i className='bx bxs-chevron-right'></i></a> </div>
          </div>
        </div>

        <div
          onMouseEnter={mouseOverProject2}
          onMouseLeave={mouseOutProject2}
          className='Projects__project2 img-size'>
          <div
            style={{ display: hiddenProject2 ? "block" : "none" }}
            className="hidden-content">
            <p className='Projects__name'>R&Ms Dimension</p>
            <span><i className='bx bxl-react' ></i></span>
            <span><i className='bx bxl-javascript' ></i></span>
            <span><i className='bx bxl-css3' ></i></span>
            <div className='Projects__link'><a target='_blank' href="https://dimension-rm.netlify.app"><i className='bx bxs-chevron-right'></i></a> </div>
          </div>
        </div>

        <div
          onMouseEnter={mouseOverProject3}
          onMouseLeave={mouseOutProject3}
          className='Projects__project3 img-size'>
          <div
            style={{ display: hiddenProject3 ? "block" : "none" }}
            className="hidden-content">
            <p className='Projects__name'>PokeLore</p>
            <span><i className='bx bxl-react' ></i></span>
            <span><i className='bx bxl-javascript' ></i></span>
            <span><i className='bx bxl-css3' ></i></span>
            <div className='Projects__link'><a target='_blank' href="https://pokelore.netlify.app"><i className='bx bxs-chevron-right'></i></a> </div>
          </div>
        </div>

        <div
          onMouseEnter={mouseOverProject4}
          onMouseLeave={mouseOutProject4}
          className='Projects__project4 img-size'>
          <div
            style={{ display: hiddenProject4 ? "block" : "none" }}
            className="hidden-content">
            <p className='Projects__name'>FindYourWeather</p>
            <span><i className='bx bxl-react' ></i></span>
            <span><i className='bx bxl-javascript' ></i></span>
            <span><i className='bx bxl-css3' ></i></span>
            <div className='Projects__link'><a target='_blank' href="https://find-your-weather-page.netlify.app"><i className='bx bxs-chevron-right'></i></a> </div>
          </div>
        </div>
      </div>
    </section>
  );
};