import style from './pageNav.module.css'
import Link from 'next/link'

export default function PageNav() {
    
  return (
    <div className={style.container}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/essential">
        <a>Essential</a>
      </Link>
      <Link href="/">
        <a>Good for you</a>
      </Link>
      <Link href="/">
        <a>Fluent</a>
      </Link>
      <Link href="/">
        <a>Blog</a>
      </Link>
      <Link href="/">
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