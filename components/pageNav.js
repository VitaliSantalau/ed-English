import style from './pageNav.module.css'
import Link from 'next/link'

export default function PageNav() {
    
  return (
    <div className={style.container}>
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
    </div>
  )
}