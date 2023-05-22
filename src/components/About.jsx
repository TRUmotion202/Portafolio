import React from 'react'
import "./styles/About.css"
import texts from "../utils/Language/text.json"




const About = ({ idiom }) => {



  return (
    <section className='About grid--container '>

        <div className='About__content'>
          <div className='About__img'></div>
          <article className='About__greeting'>
            <h2 className='About__title'>{texts[idiom].info.greeting} <span>Omar Proaño</span></h2>
            <p className='About__info'>{texts[idiom].info.presentation}</p>
            <div className='About__sm'>
              <span className='About__ln'> <a href="https://www.linkedin.com/in/omar-proa%C3%B1o/" target='_blank'><i className='bx bxl-linkedin' ></i></a> </span>
              <span className='About__gthb'> <a href="https://github.com/TRUmotion202" target='_blank'><i className='bx bxl-github'></i></a> </span>
            </div>
          </article>
        </div>

      <article className='About__content-2'>
        <div className='About__img-2'></div>
        <div className='About__datas'>
          <h3 className='About__name'>{texts[idiom].info.me_name}</h3>
        <p className='About__text'>{texts[idiom].info.me}</p>
        <div className='About__data'>
          <p className='About__tname'><span style={{ fontWeight: 700 }}>{texts[idiom].info.contact.name} </span>Omar Proaño</p>
          <p className='About__tage'><span style={{ fontWeight: 700 }}>{texts[idiom].info.contact.age} </span>20</p>
          <p className='About__tage'><span style={{ fontWeight: 700 }}>{texts[idiom].info.contact.phone} </span>+593 96 312 9839</p>
          <p className='About__temail'><span style={{ fontWeight: 700 }}>{texts[idiom].info.contact.email} </span>omiso020@gmail.com</p>
        </div>
        <div className='About__CVs'>
          <div className='About__enCV'><a href='/CVs/Omar Proaño_2_CV.pdf' download>Download CV</a></div>
          <div className='About__esCV'><a href='/CVs/Omar Proaño_2_CV.pdf' download>Descargar CV</a></div>
        </div>
        
        </div>
      </article>
    </section>
  )
}

export default About