import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import NoticeList from '../features/Notice/components/NoticeList'

const NoticePage = () => {
  return (
    <div>
        <Navbar>
            <NoticeList></NoticeList>
        </Navbar>
    </div>
  )
}

export default NoticePage