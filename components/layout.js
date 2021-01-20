import React from 'react'
import Notify from './notify'

export default function Layout({children}) {
  return (
    <div>
      <Notify />
      {children}
    </div>
  )
}