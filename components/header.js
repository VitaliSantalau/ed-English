import React, { useContext } from 'react'
import style from './header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { DataContext } from '../store/globalState'
import Cookie from 'js-cookie'

export default function Header() {
  const {state, dispatch} = useContext(DataContext)
  const { auth } = state

  const handleLogout = () => {
    Cookie.remove('refreshtoken', {path: 'api/auth/accessToken'})
    localStorage.removeItem('firstLogin')
    dispatch({ type: 'AUTH', payload: {} })
    dispatch({ type: 'NOTIFY', payload: {success: "Logged out"} })
  }

  const loggedRouter = () => {
    return (
      <div className={style.account}>
        <div>{auth.user.name}</div>
        <div>Profile</div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  }

  return (
    <header className={style.header}>
      <div className={style.firstlevel}>
        <Link href="/" className={style.logo}>
          <a><Image src="/logo.png" alt="Picture of the logo" width={70} height={70}/></a>
        </Link>
        <div className={style.slogan}>
          Learn English by just thinking English
        </div>
        <div className={style.authentification}>
          {
            Object.keys(auth).length === 0 ? 
              <Link href="/auth/login"> 
                <a className={style.login}>Log in</a>
              </Link> : 
            loggedRouter()
          }     
        </div>
      </div>
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