import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import ListDetails from '../features/Event/components/ListDetails';

const EventListDetailPage = () => {
  return (
    <div>
        <Navbar>
            <ListDetails></ListDetails>
        </Navbar>
    </div>
  )
}

export default EventListDetailPage