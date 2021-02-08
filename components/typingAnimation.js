/* https://github.com/mattboldt/typed.js */

import style from './typingAnimation.module.css'
import React, { useEffect, useRef } from "react"
import Typed from 'typed.js'

const words = [
  'Child?',
  'Adult?',
  'Retired?',
  'Housekeeper?',
  'Businessman?',
  'Official?',
  'Student?'
]

const options = {
  strings: words,
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  cursorChar: "|",
};

export default function Typing() {
  const position = useRef(null)

  useEffect(() => {
    let typing = new Typed(position.current, options)
    
    return () => {
      typing.destroy();
    }
  })

  return (
    <div className={style.container}>
      <div className={style.containerQuestionTyping}>
        <div className={style.question}>Who can use it?</div>
        <div className={style.containerTyping}>
          <div ref={position}/>
        </div>
      </div>
      <div className={style.answer}>Everyone who is learning English now</div>
    </div>
  )
}