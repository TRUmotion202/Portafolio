import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import useSwitcherLanguage from './utils/Language/useSwitcherLanguage'
import Skills from './components/Skills'
import Available from './components/Available'
import { Projects } from './components/Projects'

function App() {

  const { idiom, changeIdiom } = useSwitcherLanguage()

  return (
    <div>
      <Navbar idiom={idiom} changeIdiom={changeIdiom} />
      <About idiom={idiom}/>
      <Skills idiom={idiom}/>
      <Available idiom={idiom} />
      <Projects idiom={idiom}/>
    </div>
  )
}

export default App
