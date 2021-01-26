import style from './authNav.module.css'
import Link from 'next/link'

export default function AuthNav() {
    
  return (
      <Link href="/">
        <a className={style.login}>Login</a>
      </Link>
    )
  }