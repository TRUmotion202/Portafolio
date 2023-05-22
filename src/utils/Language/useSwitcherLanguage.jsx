import React, { useState } from 'react'

const useSwitcherLanguage = () => {

  const [idiom, setIdiom] = useState('es');

  const changeIdiom = () => {
    const newIdiom = idiom === 'es' ? 'en' : 'es';
    setIdiom(newIdiom);
  };


  return {idiom, changeIdiom}
}

export default useSwitcherLanguage