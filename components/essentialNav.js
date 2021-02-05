import style from './essentialNav.module.css'
import Link from 'next/link'

export default function EssentialNav() {
    
  return (
    <div className={style.container}>
    <h3>Skills for survival</h3>
    <div>
    <div className={style.containerLink}>
    <Link href="">
        <a><h4>Getting started</h4></a>
      </Link>
      <Link href="">
        <a><h4>Essential words</h4></a>
      </Link>
        <div>read</div>
        <div>write</div>
        <div>speak</div>
        <div>listen</div>
      <Link href="">
        <a><h4>Essential gramma</h4></a>
      </Link>
      <Link href="">
        <a><h4>Essential phrase</h4></a>
      </Link>
      <Link href="">
        <a><h4>Irregular verbs</h4></a>
      </Link>
      <Link href="">
        <a><h4>Stable expressions</h4></a>
      </Link>
    </div>
    </div>
    </div>
  )
}