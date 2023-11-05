import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import CompDetails from '../features/Competition/components/CompDetails'

const CompDetailsPage = () => {
  return (
    <div>
        <Navbar>
            <CompDetails></CompDetails>
        </Navbar>
    </div>
  )
}

export default CompDetailsPage