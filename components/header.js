import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import style from './header.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [ session, loading ] = useSession()

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
          <div className={style.account}>
            Account
          </div>
        {!session && <>
          <div className={style.login} onClick={signIn}> 
            Log in
          </div>
        </>}    
        {session && <>
        Signed in as {session.user.email} <br/>
          <button onClick={signOut}>Sign out</button>
         </>} 
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