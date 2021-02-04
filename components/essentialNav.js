import style from './essentialNav.module.css'
import Link from 'next/link'

export default function EssentialNav() {
    
  return (
    <div className={style.container}>
      <Link href="">
        <a>Essential word</a>
      </Link>
      <Link href="">
        <a>Essential gramma</a>
      </Link>
      <Link href="">
        <a>Essential phrase</a>
      </Link>
      <Link href="">
        <a>Irregular verbs</a>
      </Link>
      <Link href="">
        <a>Stable expressions</a>
      </Link>
    </div>
  )
}