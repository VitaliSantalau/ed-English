import style from './startNav.module.css'
import Link from 'next/link'

export default function StartNav() {
    
  return (
    <div className={style.container}>
    <h3>Skills for survival</h3>
    <div>
    <div className={style.containerLink}>
    <Link href="/">
        <a><h4>Getting started</h4></a>
      </Link>
      <Link href="/">
        <a><h4>Essential words</h4></a>
      </Link>
        <div><span className={style.dot}>&#8226;</span>read</div>
        <div><span className={style.dot}>&#8226;</span>write</div>
        <div><span className={style.dot}>&#8226;</span>speak</div>
        <div><span className={style.dot}>&#8226;</span>listen</div>
      <Link href="/">
        <a><h4>Essential gramma</h4></a>
      </Link>
      <Link href="/">
        <a><h4>Essential phrase</h4></a>
      </Link>
      <Link href="/">
        <a><h4>Irregular verbs</h4></a>
      </Link>
    </div>
    </div>
    </div>
  )
}