import style from './pageNav.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function PageNav() {
  const [isFixed, setIsFixed] = useState(false);
  const containerNav = isFixed ? style.containerNavFixed : style.containerNavFloat
  
  const handleScroll = () => (window.pageYOffset > 80) ? setIsFixed(true) : setIsFixed(false);

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
      <Link href="/essential">
        <a>Start</a>
      </Link>
      <Link href="/">
        <a>Enjoy</a>
      </Link>
      <Link href="/">
        <a>Proud</a>
      </Link>
      <Link href="/">
        <a>Blog</a>
      </Link>
      <Link href="/teacher">
        <a>Teacher</a>
      </Link>
      <Link href="/">
        <a>
          <button className={style.buttonFeedback}>feedback</button>
        </a>
      </Link>
      <Link href="/">
        <a>
          <button className={style.buttonTests}>get tests</button>
        </a>
      </Link>
    </nav>
    </div>
  )
}