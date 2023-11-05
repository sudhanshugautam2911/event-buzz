import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import EventList from '../features/Event/components/EventList';

const EventListPage = () => {
  return (
    <div>
        <Navbar>
            <EventList></EventList>
        </Navbar>
    </div>
  )
}

export default EventListPage