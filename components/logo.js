import style from './logo.module.css'
import Link from 'next/link'

export default function Logo() {
    return (
      <Link href="/">
        <a className={style.container}>
          <div>Ed-English</div>
          <div className={style.containerEvolution}>
            <div>e</div>
            <div>v</div>
            <div>o</div>
            <div>l</div>
            <div>u</div>
            <div>t</div>
            <div>i</div>
            <div>o</div>
            <div>n</div>
          </div>
        </a>
      </Link>
    )
  }