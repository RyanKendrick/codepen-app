import { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar: NextPage = () => {
  return (
    <div className='sidebar'>
      {/* next/image reads public folder simply as '/' - don't need exact file path */}
      <Image
        width={2500} 
        height={454} 
        src={`/codepen-logo.svg`} 
        alt={`side-bar`} 
        className={`sidebar-icon`}
      />
      <span className='sidebar-subtitle'>TRY OUR ONLINE EDITOR</span>
      {/* next/link href only needs '/' + page name (no file extension) */}
      <Link href="/codepen" passHref >
        <div className='sidebar-href'><span className='sidebar-span'>Start Coding</span></div>
      </Link>
    </div>
  )
}

export default Sidebar

