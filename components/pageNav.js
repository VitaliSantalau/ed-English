import style from './pageNav.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import FeedbackForm from './feedbackForm';

export default function PageNav() {

  const [isFixed, setIsFixed] = useState(false);
  const containerNav = isFixed ? style.containerNavFixed : style.containerNavFloat
  const handleScroll = () => (window.pageYOffset > 80) ? setIsFixed(true) : setIsFixed(false);

  const [isShowFormFeedback, setIsShowFormFeedback] = useState(false);
  const containerFeedback = isShowFormFeedback ? style.containerFeedbackShow : style.containerFeedbackHide
  const handleShowFeedBack = () => isShowFormFeedback ? setIsShowFormFeedback(false) : setIsShowFormFeedback(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })


  return (
    <div className={containerNav}>
    <nav className={style.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/start/getting-started">
        <a>Start</a>
      </Link>
      <Link href="/enjoy">
        <a>Enjoy</a>
      </Link>
      <Link href="/proud">
        <a>Proud</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/teacher">
        <a>Teacher</a>
      </Link>
      <div className={style.containerButtonFeedbackForm}>
        <button className={style.buttonFeedback} onClick={handleShowFeedBack}>
          feedback
        </button>
        <div className={containerFeedback}>
          <FeedbackForm handleShowFeedBack={handleShowFeedBack}/>
        </div>
      </div>
      <Link href="/tests">
        <a>
          <button className={style.buttonTests}>get tests</button>
        </a>
      </Link>
    </nav>
    </div>
  )
}