import style from './logo.module.css'
import Link from 'next/link'

export default function Logo() {
    return (
      <Link href="/">
        <a className={style.container}>Ed-English</a>
      </Link>
    )
  }