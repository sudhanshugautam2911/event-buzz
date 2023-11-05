import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import HomePage from './HomePage'

const EventListPage = () => {
  return (
    <div>
        <Navbar>
            <HomePage></HomePage>
        </Navbar>
    </div>
  )
}

export default EventListPage