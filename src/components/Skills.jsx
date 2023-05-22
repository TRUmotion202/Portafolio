import React from 'react'
import texts from "../utils/Language/text.json"
import "./styles/Skills.css"

const Skills = ({idiom}) => {
  return (
    <section id='skills' className='Skills grid--container'>
      <h2 className='Skills__title'>{texts[idiom].skill.my}<span>{texts[idiom].skill.skills}</span></h2>
      <p className='Skills__description'>{texts[idiom].skill.text}</p>
      <div className='Skills__skills'>
        <div className='Skills__skill'>
          <div><i className='bx bxl-html5'></i></div>
          <h3>HTML</h3>
          <p>{texts[idiom].skill.languages.html}</p>
        </div>
        <div className='Skills__skill'>
          <div><i className='bx bxl-css3' ></i></div>
          <h3>CSS</h3>
          <p>{texts[idiom].skill.languages.css}</p>
        </div>
        <div className='Skills__skill'>
          <div><i className='bx bxl-javascript' ></i></div>
          <h3>JavaScript</h3>
          <p>{texts[idiom].skill.languages.JS}</p>
        </div>
        <div className='Skills__skill'>
          <div><i className='bx bxl-react' ></i></div>
          <h3>ReactJS</h3>
          <p>{texts[idiom].skill.languages.React}</p>
        </div>
        <div className='Skills__skill'>
          <div><i className='bx bxl-nodejs' ></i></div>
          <h3>NodeJS</h3>
          <p>{texts[idiom].skill.languages.node}</p>
        </div>
        <div className='Skills__skill'>
          <div><i className='bx bxl-tailwind-css' ></i></div>
          <h3>TailWind</h3>
          <p>{texts[idiom].skill.languages.tailwind}</p>
        </div>
      </div>
    </section>
  )
}

export default Skills