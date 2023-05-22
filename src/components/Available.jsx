import React from 'react'
import texts from "../utils/Language/text.json"
import "./styles/Available.css"

const Available = ({idiom}) => {
  return (
    <section className='Available'>
      <h2 className='Available__title'>{texts[idiom].available}</h2>
    </section>
  )
}

export default Available