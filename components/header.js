import style from './header.module.css'
import Logo from './logo'
import AuthNav from './authNav'
import Link from 'next/link'


export default function Header() {
  return (
    <header className={style.header}>
      <Logo />    
      <div className={style.slogan}>
          Learn English by just thinking English
      </div>
      <AuthNav />  

      <div className={style.secondlevel}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>Blog</a>
        </Link>
        <Link href="/">
          <a>Exercises</a>
        </Link>
        <Link href="/">
          <a>
            <button className={style.buttonTests}>get tests</button>
          </a>
        </Link>
      </div>
    </header>
  )
}